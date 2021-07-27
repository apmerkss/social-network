import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field className={s.input} name={"message"} component="textarea"/>
            <button className={s.button}>Submit</button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'addMessage'})(AddMessageForm);

const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = props.dialogsPage.messages.map(m => <Message messages={m}/>);

    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.dialogs}>
                <ul className={s.dialogItems}>
                    {dialogsElement}
                </ul>
                <div>
                    <ul className={s.messages}>
                        {messagesElement}
                    </ul>
                    <AddMessageFormRedux onSubmit={props.onSubmitMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
