import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom"
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(props) {
        let userId = this.props.match.params.userID || this.props.authorizedUserId;

        if (userId) {
            this.props.getUserProfile(userId);
        }
    }

    render() {
        return (
            <div>
                <Profile  {...this.props} userId={this.userId}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
    authorizedUserId: state.auth.authorizedUserId,
    isAuth: state.auth.isAuth
});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus})
)(ProfileContainer);

