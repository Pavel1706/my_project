import React from 'react';
import p from './Face.module.css';
import {MyDreams} from "./myDreams/MyDreams";
import {FaceInfo} from "./FaceInfo/FaceInfo";
import {Dreamtype} from "./myDreams/dream/Dream";
import {addPost, StateType} from "../../Redux/State";

type AppPropsType = {
    posts: StateType
    addPost: (text:string)=> void
}


export const Face = (props:AppPropsType) => {

    return (
        <div>
            <FaceInfo message={'Hello there buddy'}/>
            <MyDreams posts={props.posts} addNewdream={props.addPost}/>
        </div>
    )
}