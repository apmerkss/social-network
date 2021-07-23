import {authAPI} from "../api/api";
import {getUserProfile, getUserStatus} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    isAuth: false,
    userId: null,
    login: null,
    email: null,
    avatar: null,
    id: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }
        default:
            return state;
    }
};

export const setUserAuthData = (userId, email, login) => (
    {
        type: SET_USER_DATA,
        data: {
            userId, email, login
        }
    }
);


export const getCurrentUserProfile = () => {
    return (dispatch) => {
        authAPI.getCurrentUserProfile().then(response => {

            let {id, email, login} = response.data;
            if (response.resultCode === 0) {
                dispatch(setUserAuthData(id, email, login));
            }
            dispatch(getUserProfile(id));
            dispatch(getUserStatus(id));
        });
    }
}

export default authReducer;
