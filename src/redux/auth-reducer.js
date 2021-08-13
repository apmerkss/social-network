import {authAPI, securityAPI} from "../api/api";
import {getUserProfile} from "./profile-reducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    isAuth: false,
    userId: null,
    login: null,
    email: null,
    avatar: null,
    id: null,
    captchaUrl: null,
    authorizedUserId: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload ,  //payload = userData
            };
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        }
        default:
            return state;
    }
};

export const setUserAuthData = (userId, email, login, isAuth = true, captchaUrl = null) => (
    {
        type: SET_USER_DATA,
        payload: {
            userId, email, login, isAuth, captchaUrl, authorizedUserId: userId
        }
    }
);

export const setCaptcha = (captchaUrl) => (
    {
        type: SET_CAPTCHA,
        captchaUrl
    }
);


export const getMyProfile = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            let {id, email, login} = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(id));
                dispatch(setUserAuthData(id, email, login));
            }
        });
    }
}

export const sendLoginRequest = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getMyProfile());
            } else if (response.data.resultCode === 10) {
                securityAPI.captcha().then(response => {
                    dispatch(setCaptcha(response.data.url));
                })
            } else {
                let action = stopSubmit('login', {email: "Email is wrong"});
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false));
            }
        });
    }
}

export default authReducer;
