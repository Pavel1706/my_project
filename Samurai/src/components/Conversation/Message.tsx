import React from 'react';
import p from "./Conversation.module.css";
import {NavLink} from "react-router-dom";


type MessageType = {
    message: string
}


export const Message =(props: MessageType)=>{

    return(
        <div className={p.message}>{props.message}</div>
    )
}