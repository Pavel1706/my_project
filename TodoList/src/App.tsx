import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

function App() {

    type TypeButton = 'All' | 'Completed' | 'Active'

    let [tasks1, state] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    let [now, setState] = useState<TypeButton>('All')

    let todolist = tasks1

    if (now === 'Completed') {
        todolist = tasks1.filter(t => t.isDone)
    }

    if (now === 'Active') {
        todolist = tasks1.filter(t => !t.isDone)
    }

    function Sort(props: 'All' | 'Completed' | 'Active') {
        setState(props)
    }

    function AddTask(title:string){
        let newTask = {id: v1(), title: title, isDone: false}
        state([newTask, ...tasks1])
    }


    function RemoveTask(id: string) {
        tasks1 = tasks1.filter(t => t.id !== id)
        state(tasks1)
    }

    function changeStatus(taskId:string, isDone:boolean ) {
        let task = tasks1.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone;
        }
    state(tasks1);
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={todolist}
                      RemoveTask={RemoveTask}
                      Sort={Sort}
                      AddTask={AddTask}
            />

        </div>
    );
}

export default App;
