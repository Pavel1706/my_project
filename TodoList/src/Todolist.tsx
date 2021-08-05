import React, {ChangeEvent, KeyboardEvent,  useState} from 'react';
import {Button} from "./Components/Button";
import {filterType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    setFilterToo: (name: filterType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setNewTaskTitle(e.currentTarget.value)
        }
    const onKeyPressHandler =(e: KeyboardEvent<HTMLInputElement>)=> {
        if (e.ctrlKey && e.charCode === 13){
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }
    const addTask =() => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }
    const onAllClickHandler =()=>props.setFilterToo('All')
    const onActiveClickHandler =()=>props.setFilterToo('Active')
    const onCompletedClickHandler =()=>props.setFilterToo('Completed')
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTaskTitle}
                   onChange={onChangeHandler }
                onKeyPress={onKeyPressHandler}/>
            <button onClick={addTask}>+
            </button>
        </div>
        <ul>
            {/*{props.tasks.map(mTask=><li key={mTask.id}><input type="checkbox" checked={mTask.isDone}/> <span>{mTask.title}</span></li> )}*/}
            {props.tasks.map((mTask) => {

                return (
                    <li key={mTask.id}>
                        <Button callBack={props.removeTask} id={mTask.id}/>
                        <input type="checkbox" checked={mTask.isDone}/> <span>{mTask.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
