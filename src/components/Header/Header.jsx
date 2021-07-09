import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/man.png";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <NavLink to='/profile'>
                    <img className={s.logo} src="https://img.icons8.com/ios-filled/100/ffffff/marriott-hotels.png" alt=""/>
                </NavLink>
            </div>
            <div>
                { props.isAuth ?
                    <>
                        <NavLink to='/account'>Account { props.login }</NavLink>
                    <img  src={props.avatar ? props.avatar : userPhoto } alt="avatar" width='40' height="40"/></> :
                    <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
