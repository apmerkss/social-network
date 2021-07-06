import s from './Users.module.css'
import React from "react";
import axios from "axios";
import userPhoto from '../../assets/images/man.png';

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=40').then(responce => {

                props.setUsers(responce.data.items);
            });

        }
    }


    return <div>
        <h1>Users</h1>
        <button onClick={getUsers}>Get Users</button>

        {
            props.users.map(u =>

                <div key={u.id} className={s.user}>
                    <div>
                        <img className={s.ava} src={u.photos.small ? u.photos.small : userPhoto} alt=""/> <br/>
                        {
                            <button onClick={() => {
                                props.toggleFollowUserAC(u.id)
                            }}>{u.follow ? 'Unfollow' : 'Follow'}</button>
                        }
                    </div>
                    <div className={s.info}>
                        <div>
                            <span>{u.name}</span>
                            <p>{u.status}</p>
                        </div>
                        <div className={s.location}>
                            <p>u.location.country</p>
                            <p>u.location.city</p>
                        </div>
                    </div>
                </div>)
        }
    </div>
}

export default Users;
