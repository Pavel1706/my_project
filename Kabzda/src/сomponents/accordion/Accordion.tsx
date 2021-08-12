import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
             {!props.collapsed &&<AccordionBody title={props.titleValue}/>}
        </div>


}

type AccordionTitlePropsType = {
    title: string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h1>{props.title}</h1>
}

type AccordionBodyPropsType = {
    title: string

}

function AccordionBody(props: AccordionBodyPropsType) {
    if (props.title === 'spisok') {
        console.log('AccordionBody rendering')
        return <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    }
    return <></>

}