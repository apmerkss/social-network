import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowUser,
    toggleIsFetching
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount(props) {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.toggleIsFetching(false);
            this.props.setTotalUsersCount(responce.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setUsers([]);
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.toggleIsFetching(false);
        });
    }

    followUser = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, null,{
            withCredentials: true,
            headers: {
               'API-KEY': '6f7f3ecd-ed5e-4ed6-a0ce-111fd29fbd86'
                //'API-KEY': '904c7076-c6df-469e-bfc4-20723289ebf0'
            }
        }).then(responce => {
            if (responce.data.resultCode === 0) {
                this.props.toggleFollowUser(userId);
            }
        });
    }

    unFollowUser = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                 'API-KEY': '6f7f3ecd-ed5e-4ed6-a0ce-111fd29fbd86'
                // 'API-KEY': '904c7076-c6df-469e-bfc4-20723289ebf0'
            }
        }).then(responce => {
            if (responce.data.resultCode === 0) {
                this.props.toggleFollowUser(userId);
            }
        });
    }

    render() {
        return <>
                    {this.props.isFetching ? <Preloader/> : null }
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        unFollowUser={this.unFollowUser}
                        followUser={this.followUser}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {toggleFollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);
