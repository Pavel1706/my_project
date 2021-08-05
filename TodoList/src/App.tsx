import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import {Todolist} from './Todolist';

export type filterType = 'All' | 'Active' | 'Completed'


function App() {

    let [tasks1, setTasks1] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    console.log(tasks1)

    let [filter, setFilter] = useState<filterType>('All')


    let dryshlag = tasks1;


    if (filter === 'Active') {
        dryshlag = tasks1.filter(t => t.isDone === false)
    }
    if (filter === 'Completed') {
        dryshlag = tasks1.filter(t => t.isDone === true)
    }

    // hey = tasks1.filter( fd=>!fd.isDone)

    const removeTask = (id: string) => {
        tasks1 = tasks1.filter(t => t.id !== id);
        setTasks1(tasks1)

    }

    function addTask(title:string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks1];
        setTasks1(newTasks);
    }

    const setFilterToo = (name: filterType) => {
        setFilter(name)
        console.log(dryshlag)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={dryshlag}
                      removeTask={removeTask}
                      setFilterToo={setFilterToo}
                      addTask={addTask}/>

        </div>
    );
}

export default App;
