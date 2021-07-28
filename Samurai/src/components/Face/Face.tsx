import React from 'react';
import p from './Face.module.css';
import {MyDreams} from "./myDreams/MyDreams";
import {FaceInfo} from "./FaceInfo/FaceInfo";
import {Dreamtype} from "./myDreams/dream/Dream";



export const Face = () => {

    return (
        <div>
            <FaceInfo message={'Hello there buddy'}/>
            <MyDreams  />
        </div>
    )
}