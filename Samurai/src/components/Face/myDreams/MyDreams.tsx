import React from 'react';
import p from './MyDreams.module.css';
import {Dream} from "./dream/Dream";
import {state} from "../../../Redux/State"


export const MyDreams = () => {

    let newText =  state.profilePage.posts.map(d => <Dream message={d.message} like={d.like}/>)

    return (
        <div className={p.since}>
            <h3> My dreams </h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add dream</button>
            </div>

            <div className={p.dreams}>
                {newText}
            </div>
        </div>

    )
}