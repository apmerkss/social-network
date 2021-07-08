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

    render() {
        return <>
                    {this.props.isFetching ? <Preloader/> : null }
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        onPageChanged={this.onPageChanged}
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
