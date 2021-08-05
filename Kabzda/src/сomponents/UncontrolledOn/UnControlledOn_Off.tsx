import React, { useState } from "react";
import p from './button.module.css'

type PropsType = {
    // on: boolean
}
type UncontrolledOn_OffType ={
    setOn: (props:boolean)=> void
    value: boolean

}


export function UncontrolledOn_Off(props:UncontrolledOn_OffType){
    console.log('OnOFF rendering')

    const onStyle = {
        width: '30px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2px',
        padding: '2px',
        backgroundColor: props.value ? 'white' : 'red'



    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.value ? 'green' : 'red'

    }
    return (
        <div>
        <div style={onStyle} onClick={()=>{props.setOn(!props.value) }}>on</div>
        <div style={offStyle} onClick={()=>{props.setOn(!props.value)}}>off</div>
        <div style={indicatorStyle}></div>
        </div>
    )
}

