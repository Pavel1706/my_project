import React from 'react';
import { Friend } from './Friend/Friend';
import {ConversationType, state} from "../../Redux/State";
import p from './Friend/friends.module.css'

type ConversationArrayType = {
    dialogs: Array<ConversationType>
}


export const Friends =(props:ConversationArrayType)=>{

    return(
        <div className={p.avatar} >

            {props.dialogs.map(t=> <li key={t.id}><div>{t.name} <img className={p.avatar} src={t.foto} /></div></li> )}



        </div>
    )
}
