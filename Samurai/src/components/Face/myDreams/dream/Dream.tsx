import React from 'react';
import k from './Dream.module.css';


export type Dreamtype ={

    message : string
    like: number
}

export const Dream = (props:Dreamtype) => {
    return (
        <div className={k.since}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6C1rS1qYf8Z6en9SWnpaIOarrDPK_G66T0Q&usqp=CAU'/>
            {props.message}
            <div>
            {props.like} likes
            </div>

        </div>


    )
}