 import React from "react";
import {connect} from "react-redux";
import {getCurrentUserProfile, logout} from "../../redux/auth-reducer";
import Header from "./Header";

 class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getCurrentUserProfile();
    }

    render() {
        return <Header  {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.profilePage.profileInfo ? state.profilePage.profileInfo.photos.small : null
    }
}


export default connect(mapStateToProps, {getCurrentUserProfile, logout})(HeaderContainer);
