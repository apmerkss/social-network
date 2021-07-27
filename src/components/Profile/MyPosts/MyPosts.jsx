import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={'input'} type={'textarea'} name={'newPostText'} className={s.field} value={props.newPostText}></Field>
            <button className={s.button}>Add Post</button>
        </form>
    )
}

const   AddPostFormRedux = reduxForm({form: 'addMessage'})(AddPostForm);


const MyPosts = (props) => {
    let postElement =
        props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    let addPost = (formData) => {
        props.addPost(formData);
    };

    return (
        <div>
            <h2>
                My Posts
            </h2>
            <AddPostFormRedux onSubmit={addPost}/>
            <ul className={s.posts}>
                {postElement}
            </ul>
        </div>
    )
};

export default MyPosts;
