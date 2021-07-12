import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleFollowUser,
    toggleIsFetching
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {getUsers, toggleFollowUserAPI} from "../../api/api";
import usersAPI from "../../api/usersApi";

class UsersContainer extends React.Component {
    componentDidMount(props) {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setUsers([]);
        this.props.setCurrentPage(pageNumber);

        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    }

    toggleFollowUserUI = (userId, isFollow) => {
        this.props.toggleFollowingProgress(userId, true);

        toggleFollowUserAPI(userId, isFollow).then(data => {
            if (data.resultCode === 0) {
                this.props.toggleFollowUser(userId);
                this.props.toggleFollowingProgress(userId, false);
            }
        });
    }

    render() {
        return <>
                    {this.props.isFetching ? <Preloader/> : null }
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        toggleFollowUserUI={this.toggleFollowUserUI}
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

export default connect(mapStateToProps, {toggleFollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);
