import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {setUserAuthData} from "../../redux/auth-reducer";
import {setProfileInfo} from "../../redux/profile-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(responce => {
                let {id, email, login} = responce.data.data;
                if (responce.data.resultCode === 0) {
                    this.props.setUserAuthData(id, email, login);
                }

                id = 2;

                axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + id).then(responce => {
                    this.props.setProfileInfo(responce.data);
                })
        });
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


export default connect(mapStateToProps, {setUserAuthData, setProfileInfo})(HeaderContainer);
