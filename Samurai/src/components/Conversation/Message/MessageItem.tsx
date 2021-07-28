import React from 'react';
import p from '../Conversation.module.css'
import {BrowserRouter, NavLink} from "react-router-dom"
import {ConversationItem} from "../ConversationItem/ConversationItem";
import {Message} from "../Message";
import {state} from "../../../Redux/State";


export const MessageItem = () => {

    let conversationElements = state.dialogsPage.dialogs
        .map(c => <ConversationItem name={c.name} id={c.id}/>);

    let messageElement = state.messagePage.messageData
        .map(m => <Message message={m.message}/>)
    return (
        <BrowserRouter>
            <div className={p.text}>
                <div className={p.dialogs}>
                    { conversationElements }
                </div>
                <div className={p.messages}>
                    {messageElement}
                </div>
            </div>
        </BrowserRouter>
    )
}