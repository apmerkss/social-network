import s from "./AddPost.module.css";
import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";

const AddPost = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;

        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    };

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };

    return (
        <div className={s.form}>
            <textarea ref={newPostElement} className={s.field} onChange={onPostChange } value={props.newPostText}/>
            <button onClick={addPost} className={s.button}>{props.btnText}</button>
        </div>
    )
};

export default AddPost;
