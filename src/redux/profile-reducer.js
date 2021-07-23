import {authAPI, profileAPI} from "../api/api";
import {setUserAuthData} from "./auth-reducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Taki spavu', likesCount: 12},
        {id: 2, message: 'It\'s time to go futher', likesCount: 23},
        {id: 3, message: 'I like apples', likesCount: 4}
    ],
    profileInfo: null,
    newPostText: '',
    status: '',
    id: null,
    currentUserId: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                newPost: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
);
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {

    return (dispatch) => {
        authAPI.getUserProfile(userId).then(response => {
            dispatch(setProfileInfo(response));
        });
    }
}

export const getUserStatus = (userId) => {

    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(response => {

            dispatch(setStatus(response));
        });
    }
}

export const updateStatus = (status) => {

    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;
