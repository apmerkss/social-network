import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {getCurrentUserProfile} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom"
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(props) {
        let userId = this.props.match.params.userID;
       // userId = 2;
        if (userId) {
            this.props.getUserProfile(userId);
        } else {
            this.props.getCurrentUserProfile();
        }

        this.props.getUserStatus(userId);

    }

    render() {
        return (
            <div>
                <Profile  {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
});

export default compose(
    withRouter,
   // withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getCurrentUserProfile, getUserStatus, updateStatus})
)(ProfileContainer);

