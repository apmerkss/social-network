const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [

    ],
    newPostText: 'itkamama',
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, isFollowed: false}
                    }
                    return u;
                })
            };
        }

        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, isFollowed: true}
                    }
                    return u;
                })
            };
        }

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users ]}
        }

        default:
            return state;
    }
};

export const followUserAC = (userId) => ({type: FOLLOW_USER, userId});
export const unfollowUserAC = (userId) => ({type: UNFOLLOW_USER, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;
