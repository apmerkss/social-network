const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FETCHING_USERS = 'FETCHING_USERS';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            };
        }

        case SET_USERS: {
            return { ...state, users: [...action.users ]}
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.pageNumb }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
        }

        case FETCHING_USERS: {
            return {...state, isFetching: action.isFetching}
        }

        case FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        }

        default:
            return state;
    }
};

export const setCurrentPage = (pageNumb) => ({type: SET_CURRENT_PAGE, pageNumb});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: FETCHING_USERS, isFetching});
export const toggleFollowUser = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const toggleFollowingProgress = (userId, isFetching) => ({type: FOLLOWING_PROGRESS, userId, isFetching});
export const setUsers = (users) => ({type: SET_USERS, users});


export default usersReducer;
