const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FETCHING_USERS = 'FETCHING_USERS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
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

        default:
            return state;
    }
};

export const setCurrentPage = (pageNumb) => ({type: SET_CURRENT_PAGE, pageNumb});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: FETCHING_USERS, isFetching: isFetching});
export const toggleFollowUser = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});


export default usersReducer;
