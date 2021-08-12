import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Input} from "./Input/Input";
import {Button} from "./Input/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    RemoveTask: (id: string) => void
    Sort: (props: 'All' | 'Completed' | 'Active') => void
    AddTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')


   function AddTask() {
        props.AddTask(title)
        setTitle('')
    }

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            props.AddTask(title)
            setTitle('')
        }
    }

    const OnAllClick = () => {
        props.Sort('All')
    }
    const OnActiveClick = () => {
        props.Sort('Active')
    }
    const OnCompletedClick = () => {
        props.Sort('Completed')
    }




    return <div>
        <h3>{props.title}</h3>
        <div>
            <Input onNewTitleChangeHandler={onNewTitleChangeHandler} onKeyPressHandler={onKeyPressHandler} title={title}/>
            < Button onClick={AddTask} />
        </div>
        <ul>
            {props.tasks.map(t => {
                const onRemoveHandler = ()=>{
                        props.RemoveTask(t.id)
                }
                const onChangeHandler =()=>{console.log(' want to change')}

                return <li key={t.id}><input type='checkbox'
                                             onChange={onChangeHandler}
                                             checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={onRemoveHandler}>x</button>
                </li>
            })}

        </ul>
        <div>
            <button onClick={OnAllClick}>All</button>
            <button onClick={OnActiveClick}>Active</button>
            <button onClick={OnCompletedClick}>Completed</button>
        </div>
    </div>
}
