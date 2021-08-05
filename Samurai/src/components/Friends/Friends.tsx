import React from 'react';
import { Friend } from './Friend/Friend';
import {ConversationType, state} from "../../Redux/State";
import p from './Friend/friends.module.css'

type ConversationArrayType = {
    dialogs: Array<ConversationType>
}


export const Friends =(props:ConversationArrayType)=>{
    let fotka = props.dialogs.map(t=> <img className={p.avatar} src={t.foto}/>)
    return(
        <div className={p.avatar} >
            <span></span>

        </div>
    )
}
