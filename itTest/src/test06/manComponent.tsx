import React, { useState } from 'react';
import {ManType} from "./06.test";


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model:string}
}

function usePavelState(m: string){
    return[m, function(){}]
}

function usePavelState2(m: string){
    return {
        message: m,
        setMessage: function(){}
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man, ...restProps} = props

    const [message, setMessage] = useState('hello')

    return (<div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
    </div>
    )
}