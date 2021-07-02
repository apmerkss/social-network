import s from './Users.module.css'
import React from "react";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    fullName: 'Pavel M.',
                    isFollowed: true,
                    status: 'Hi there',
                    location: {city: 'Vinnytsia', country: 'Ukraine'},
                    photoUrl: 'https://source.unsplash.com/collection/772333/75x75'
                },
                {
                    id: 2,
                    fullName: 'Nikita B.',
                    isFollowed: false,
                    status: 'Working Mode',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    photoUrl: 'https://source.unsplash.com/collection/772333/75x75'
                },
                {
                    id: 3,
                    fullName: 'Dimych M.',
                    isFollowed: false,
                    status: 'Go Ukraine!',
                    location: {city: 'Lviv', country: 'Ukraine'},
                    photoUrl: 'https://source.unsplash.com/collection/772333/75x75'
                },
                {
                    id: 4,
                    fullName: 'Sergey K.',
                    isFollowed: true,
                    status: 'Hi there',
                    location: {city: 'Vinnytsia', country: 'Poland'},
                    photoUrl: 'https://source.unsplash.com/collection/772333/75x75'
                },]
        );
    }


    return <div>
        <h1>Users</h1>

        {
            props.users.map(u =>

                <div key={u.id} className={s.user}>
                    <div>
                        <img src={u.photoUrl} alt=""/> <br/>
                        {
                            u.isFollowed
                                ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                                : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        }
                    </div>
                    <div className={s.info}>
                        <div>
                            <span>{u.fullName}</span>
                            <p>{u.status}</p>
                        </div>
                        <div className={s.location}>
                            <p>{u.location.country}</p>
                            <p>{u.location.city}</p>
                        </div>
                    </div>
                </div>)
        }
    </div>
}

export default Users;
