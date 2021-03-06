import {connect} from "react-redux";
import React from "react";
import {withRouter, Redirect} from "react-router-dom";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth && !this.props.match.params.userID) return <Redirect to={"/login"}/>;
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = compose(withRouter, connect(mapStateToProps))(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}


export default WithAuthRedirect;
