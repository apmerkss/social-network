import s from './Users.module.css'
import userPhoto from '../../assets/images/man.png';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

   // for (let i = 1; i <= pagesCount; i++) {
    for (let i = 1; i <= 5; i++) {
        pages.push(i);
    }

    return <div>
        <h1>Users</h1>
        <div>
            {
                pages.map(p => {
                    return <button onClick={() => {
                        props.onPageChanged(p);
                    }}
                                   className={props.currentPage === p && s.selectedPage}>{p}
                    </button>
                })
            }
        </div>
        {
            props.users.map(u =>

                <div key={u.id} className={s.user}>
                    <div>

                        <br/>
                        {
                            <button
                                disabled={props.followingInProgress.find(item => item === u.id) ? 'disabled' : null }
                                onClick={() => {
                                    props.toggleFollowUserUI(u.id, u.followed)
                                }}>
                                {u.followed ? 'Unfollow' : 'Follow'} {u.id}
                            </button>
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
