import s from './Post.module.css'

const Post = (props) => {
    return (
        <li className={s.post}>
            <img className={s.avatar} src="https://source.unsplash.com/IMYvZjlX3jE/150x150" alt=""/>
            <div>
                Post #{props.id} <br/>
                <p>
                    {props.message}
                </p>
                <div>
                    <button>Like</button>
                    <span> ({props.likesCount})</span>
                </div>
            </div>
        </li>
    )
}

export default Post;
