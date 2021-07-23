import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field} from "redux-form";

const AddPostReduxForm = (props) => {
    return (
        <form className={s.form} onSubmit={onSubmit}>
            <Field component={'input'} type={'textarea'} className={s.field} value={ок.newPostText}></Field>
            <button className={s.button}>Add Post</button>
        </form>
    )
}

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

    let onSubmit = () => {
        props.addPost();
    };

    return (
        <div>
            <h2>
                My Posts
            </h2>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <ul className={s.posts}>
                {postElement}
            </ul>
        </div>
    )
};

export default MyPosts;
