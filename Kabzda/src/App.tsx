import React, { useState } from 'react';
import './App.css';
import {Rating, RatingValueType} from './сomponents/Rating/Rating'
import {On_Off} from './сomponents/On&Off/On_Off';
import {Uncontrolledaccordion} from "./сomponents/Uncontrolledaccordion/Uncontrolledaccordion";
import {UncontrolledRating} from "./сomponents/UncontrolledRatting/UncontrolledRating";
import {UncontrolledOn_Off} from './сomponents/UncontrolledOn/UnControlledOn_Off'



function App() {
    console.log('App rendering')

    type SetOnType = false|true
    let [ratingValue, SetRatingValue]= useState<RatingValueType>(4)
    let [collapsedAccordion, setAccordion]= useState<boolean>(false)
    let [on, setOn]=useState<SetOnType>(false)

    return (
        <div className={'App'}>
            {/*<On_Off/>*/}
            <UncontrolledOn_Off  value={on} setOn={setOn} />
            <Uncontrolledaccordion titleValue={'Menu'}  setAccordion={setAccordion} value={collapsedAccordion} />




            <Rating value={ratingValue} onClick={SetRatingValue}/>



            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />

        </div>
    )
}




export default App;
