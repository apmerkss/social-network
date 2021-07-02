import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postElement =
        props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let addPost = () => {
        props.addPost();
    };

    return (
        <div>
            <h2>
                My Posts
            </h2>
            <div className={s.form}>
                <textarea ref={newPostElement} className={s.field} onChange={onPostChange } value={props.newPostText}/>
                <button onClick={addPost} className={s.button}>Add Post</button>
            </div>
            <ul className={s.posts}>
                {postElement}
            </ul>
        </div>
    )
};

export default MyPosts;
