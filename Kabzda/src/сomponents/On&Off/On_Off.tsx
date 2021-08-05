import React, { useState } from "react";
import p from './button.module.css'

type PropsType = {
    // on: boolean
}



export function On_Off(){
    console.log('OnOFF rendering')
   let [on, setOn] = useState(false);//hook with init value
    console.log('on:'+ on)
    const onStyle = {
        width: '30px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'



    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'

    }
    return (
        <div>
        <div style={onStyle} onClick={()=>{setOn(true) }}>on</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>off</div>
        <div style={indicatorStyle}></div>
        </div>
    )
}

