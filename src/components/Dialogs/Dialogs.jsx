import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    let messagesElement = props.dialogsPage.messages.map(m => <Message messages={m} /> );

    let newPostElement = React.createRef();

    let onMessageChange = () => {
        let text = newPostElement.current.value;

        props.onMessageChange(text);
    };

    let onSubmitMessage = () => {
        props.onSubmitMessage();
    };

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
                    <div className={s.form}>
                        <textarea ref={newPostElement} className={s.field}  onChange={onMessageChange} value={props.newMessageText}/>
                        <button onClick={onSubmitMessage} className={s.button}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
