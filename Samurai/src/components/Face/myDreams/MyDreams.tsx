import React from 'react';
import p from './MyDreams.module.css';
import {Dream} from "./dream/Dream";
import { StateType} from "../../../Redux/State"

type AppPropsType = {
    posts: StateType
    addNewdream: (post: string) => void
}

export const MyDreams = (props:AppPropsType) => {

    let newText = props.posts.profilePage.posts.map(d => <Dream message={d.message} like={d.like}/>)
     let newDreamElement = React.createRef<HTMLTextAreaElement>()
    let addDream = ()=>{
          if(newDreamElement.current) {
              props.addNewdream(newDreamElement.current.value)
              newDreamElement.current.value='';
          }
    }
    return (
        <div className={p.since}>
            <h3> My dreams </h3>
            <div>
                <textarea ref={newDreamElement} ></textarea>
                <button onClick={addDream}>Add dream</button>
            </div>

            <div className={p.dreams}>
                {newText}
            </div>
        </div>

    )
}