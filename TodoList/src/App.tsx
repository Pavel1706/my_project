import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterType = 'All' | 'Active' | 'Completed'


function App() {

    let [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "HTML&CSS", isDone: true},
        {id: 5, title: "JS", isDone: true},
        {id: 6, title: "ReactJS", isDone: false}
    ])

    let [filter, setFilter] = useState<filterType>('All')



    let dryshlag = tasks1;
    if(filter ==='Active'){
        dryshlag = tasks1.filter(t => t.isDone === true)
    }
    if(filter ==='All'){
        dryshlag = tasks1.filter(t => t.isDone !== true)
    }

    // hey = tasks1.filter( fd=>!fd.isDone)

    const removeTask = (id: number) => {
        tasks1 = tasks1.filter(t => t.id !== id);
        setTasks1(tasks1)

    }
    const setFilterToo=(name:filterType)=>{
        setFilter(name)
        console.log(filter)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={dryshlag}
                      removeTask={removeTask}
                      setFilterToo={setFilterToo}
            />

        </div>
    );
}

export default App;
