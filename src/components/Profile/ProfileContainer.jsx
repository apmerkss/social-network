import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {getCurrentUserProfile} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom"
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(props) {
        let userId = this.props.match.params.userID;

        if (userId) {
            this.props.getUserProfile(this.props.match.params.userID);
        } else {
            this.props.getCurrentUserProfile();
        }

    }

    render() {
        return (
            <div>
                <Profile  {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({profileInfo: state.profilePage.profileInfo});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getCurrentUserProfile})
)(ProfileContainer);

