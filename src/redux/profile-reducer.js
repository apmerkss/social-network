import {authAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

let initialState = {
    posts: [
        {id: 1, message: 'Taki spavu', likesCount: 12},
        {id: 2, message: 'It\'s time to go futher', likesCount: 23},
        {id: 3, message: 'I like apples', likesCount: 4}
    ],
    profileInfo: null,
    newPostText: '',
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

export const getUserProfile = (userId) => {

    return (dispatch) => {
        authAPI.getUserProfile(userId).then(response => {
            dispatch(setProfileInfo(response));
        });
    }
}


export default profileReducer;
