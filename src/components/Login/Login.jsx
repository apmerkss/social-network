import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {logout, sendLoginRequest} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React from "react";

const Login = (props) => {

    const logIn = (formData) => {
        props.sendLoginRequest(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }


    if (props.isAuth) {
        return <Redirect to={"/profile"} /> ;
    }

    return (
        <div>
            <h1>Hello</h1>

            <LoginReduxForm onSubmit={logIn} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.input} name={"email"} component="input" placeholder="email"/>
            <Field className={s.input} name={"password"}  type="password" component="input" placeholder="Password"/>
            <label>
                <Field type={"checkbox"}  name={"rememberMe"} component="input"/>
                Remember me
            </label>

            { props.captchaUrl ?
                <>
                    Please, enter text from the picture <br/><br/>
                    <img src={props.captchaUrl} alt="Captcha picture"/><br/>
                    <Field className={s.input} name={"captcha"} component="input" placeholder={'Captcha'}/>
                </>
                : '' }

            <button className={s.button}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};

export default connect(mapStateToProps, {sendLoginRequest, logout})(Login);


//to do:

// -  send auth data to api
// -  redirect to profile page if logged in
