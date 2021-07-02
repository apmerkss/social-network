import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <li className={s.dialog}>
            <img className={s.avatar} src="https://source.unsplash.com/IMYvZjlX3jE/50x50" alt=""/>
            <div>
                <NavLink to={path} activeClassName={s.activeDialog} className={s.friend}>{props.name}</NavLink> <br/>
              {/*  <span>Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span> <br/>*/}
                <span className={s.date}>
                    <time dateTime="2004-07-24T18:18">4 hours ago</time>
                </span>
            </div>
        </li>
    );
}

export default DialogItem;
