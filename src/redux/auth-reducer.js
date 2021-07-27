import {authAPI, securityAPI} from "../api/api";
import {getUserProfile, getUserStatus} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    isAuth: false,
    userId: null,
    login: null,
    email: null,
    avatar: null,
    id: null,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload   //payload = userData
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
            userId, email, login, isAuth
        }
    }
);

export const setCaptcha = (captchaUrl) => (
    {
        type: SET_CAPTCHA,
        captchaUrl
    }
);


export const getCurrentUserProfile = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            let {id, email, login} = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(id));
                dispatch(setUserAuthData(id, email, login));
                dispatch(getUserStatus(id));
            }
        });
    }
}

export const sendLoginRequest = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getCurrentUserProfile());
            } else if (response.data.resultCode === 10) {
                securityAPI.captcha().then(response => {
                    dispatch(setCaptcha(response.data.url));
                })
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
