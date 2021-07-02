import s from './Message.module.css'
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <li className={s.messageItem}>
            <img className={s.avatar} src="https://source.unsplash.com/IMYvZjlX3jE/50x50" alt=""/>
            <div>
                <NavLink to={props.messages.id}  activeClassName={s.activeLink} className={s.link}>
                    <span className="friendName">{props.messages.name}</span>
                </NavLink>
                <span>
                    <time datetime={props.messages.date}>
                        {props.messages.date}
                    </time>
                </span>
                <div className={s.message}>{props.messages.message}</div>
            </div>
        </li>
    );
}

export default Message;
