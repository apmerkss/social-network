import s from "./Friend.module.css";
import {NavLink} from "react-router-dom";

const Friend = (props) => {

    let friends = props.friends.map(friend => <li key={friend.id}>
        <NavLink to={friend.id}  activeClassName={s.activeLink} className={s.link}>
            <img className={s.avatar} src="https://source.unsplash.com/IMYvZjlX3jE/50x50" alt=""/>
            <span className="friendName">{friend.name}</span>
        </NavLink>
    </li>);

    return (
        <div>
            <h3>
                TOP Friends
                <ul>
                    {friends}
                </ul>
            </h3>
        </div>
    )
}

export default Friend;
