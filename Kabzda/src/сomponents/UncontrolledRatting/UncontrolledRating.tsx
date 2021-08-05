import React, { useState } from "react";



export function UncontrolledRating() {

    console.log('rating rendering')


    let [much, setMuch]=useState(3)

        return (
            <div>
                <Star selected={much >0} setMuch={()=>{setMuch(1)}}/>
                <Star selected={much >1} setMuch={()=>{setMuch(2)}}/>
                <Star selected={much >2} setMuch={()=>{setMuch(3)}}/>
                <Star selected={much >3} setMuch={()=>{setMuch(4)}}/>
                <Star selected={much >4} setMuch={()=>{setMuch(5)}}/>
            </div>
        )

}

type StarPropsType ={
    selected: boolean
    setMuch: ()=>void
}

function Star(props: StarPropsType) {
    // return props.selected ? <span><b>star </b></span>:<span>Star </span>

    return <span onClick={()=> {props.setMuch()}}>
        {props.selected ? <b>star </b> : "star " }
    </span>



}