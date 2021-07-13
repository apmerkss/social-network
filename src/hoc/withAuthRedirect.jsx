import {connect} from "react-redux";
import React from "react";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} /> ;

            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}


export default WithAuthRedirect;
