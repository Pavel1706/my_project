import React, {useState} from "react";




type AccordionPropsType = {
    titleValue: string
    setAccordion: (props:boolean)=> void
    value: boolean

}


export function Uncontrolledaccordion(props: AccordionPropsType) {

    // let[menu, state]=useState(false)
    // console.log('menu'+menu)

        return (<div>
            <AccordionTitle title={props.titleValue} setAccordion={()=>props.setAccordion(!props.value)}  value={props.value} />
                {/*{!menu && <AccordionBody />}*/}
         </div>
        )}


// let CollapsedMenu=()=>{
//     state(!menu)
// }

type AccordionTitlePropsType = {
    title: string
    setAccordion: (props:boolean)=> void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {

    console.log(props.value)
        return (<div>
            {/*<h3 onClick={()=>{props.onClick()}}>{props.title}</h3>*/}
            <div>
                <h3 onClick={()=>{props.setAccordion(props.value)}}>{props.title}</h3>
                {props.value ? <AccordionBody/> : ''}
            </div>
            </div>
        )



}



function AccordionBody() {

        console.log('AccordionBody rendering')
        return <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

}

