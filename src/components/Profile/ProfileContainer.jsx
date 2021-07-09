import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {

    componentDidMount(props) {
        let userId = this.props.match.params.userID;

        if (!userId) {
            userId = 2;
        }

        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(responce => {
            this.props.setProfileInfo(responce.data);
        });
    }

    render() {
        return (
            <div>
                <Profile  {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ profileInfo: state.profilePage.profileInfo });

let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setProfileInfo })(withUrlDataContainerComponent);

