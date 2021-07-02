import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = (props) => {
    let links = props.sidebar.links.map(item => <li><NavLink to={item.link}  activeClassName={s.activeLink} className={s.link}>{item.text}</NavLink></li>);

    return (
        <aside className={s.nav}>
            <ul className={s.menu}>
                {links}
            </ul>
            <Friend friends={props.sidebar.friends}/>
        </aside>
    )
}

export default Navbar;
