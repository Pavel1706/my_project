import React from 'react';
import {Button} from "./Components/Button";
import {filterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id:number)=>void
    setFilterToo: (name:filterType)=>void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {/*{props.tasks.map(mTask=><li key={mTask.id}><input type="checkbox" checked={mTask.isDone}/> <span>{mTask.title}</span></li> )}*/}
            {props.tasks.map((mTask)=>{
                return (
                    <li key={mTask.id}>
                        <Button callBack={props.removeTask} id={mTask.id}/>
                        <input type="checkbox" checked={mTask.isDone} /> <span>{mTask.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick = {()=>props.setFilterToo('All')}>All</button>
            <button onClick = {()=>props.setFilterToo('Active')}>Active</button>
            <button onClick = {()=>props.setFilterToo('Completed')}>Completed</button>
        </div>
    </div>
}
