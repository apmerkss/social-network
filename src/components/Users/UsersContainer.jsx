import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFollowUserAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowUserAC: (userId) => {
            dispatch(toggleFollowUserAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
