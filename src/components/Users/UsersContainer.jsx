import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowUser
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount(props) {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
                    {this.props.isFetching ? <Preloader/> : null }
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        toggleFollowUser={this.props.toggleFollowUser}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        followingInProgress={this.props.followingInProgress}
                    />
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setCurrentPage, setTotalUsersCount, getUsers, toggleFollowUser})
)(UsersContainer);
