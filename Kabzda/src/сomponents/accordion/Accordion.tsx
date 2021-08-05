import React from "react";
//
//
// type AccordionPropsType = {
//     titleValue: string
//     collapsed: boolean
// }
//
// function Accordion(props: AccordionPropsType) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//              {!props.collapsed &&<AccordionBody title={props.titleValue}/>}
//         </div>
//
//
// }
//
// type AccordionTitlePropsType = {
//     title: string
//
// }
//
// function AccordionTitle(props: AccordionTitlePropsType) {
//     if (props.title === 'Menu') {
//         console.log('AccordionTitle rendering')
//         return (
//             <h3>Menu</h3>
//         )
//     }
//     return <></>
//
//
// }
//
// type AccordionBodyPropsType = {
//     title: string
//
// }
//
// function AccordionBody(props: AccordionBodyPropsType) {
//     if (props.title === 'spisok') {
//         console.log('AccordionBody rendering')
//         return <div>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//         </div>
//     }
//     return <></>
//
// }
//
// export default Accordion;