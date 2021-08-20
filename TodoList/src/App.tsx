import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [key:string]: Array<TaskType>
}

function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolist] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "hello", filter: 'all'},
        {id: todolistId2, title: "bye", filter: 'active'}
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "bread", isDone: false},
            {id: v1(), title: "milk", isDone: false}
        ]
    });


    function removeTask(id: string,todolistId: string) {
        let pumpum=tasks[todolistId]
        tasks[todolistId]= pumpum.filter(t => t.id != id);
        setTasks({...tasks});
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let pumpum=tasks[todolistId]
        tasks[todolistId] = [task, ...pumpum];
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean,todolistId:string) {
        let pumpum =tasks[todolistId]
        debugger
        let task = pumpum.find(t => t.id === taskId);
        debugger
        if (task) {
            task.isDone = isDone;
            setTasks({...tasks});
        }


    }


    function changeFilter(value: FilterValuesType,todolistId:string) {
            let todolist= todolists.find(t=>t.id ===todolistId )
        if(todolist){
            todolist.filter=value
            setTodolist([...todolists])
        }
    }

    function removeTodolist(id:string){
        setTodolist(todolists.filter(t=>t.id !==id))

        delete tasks[id]
        setTasks({...tasks})
    }


    return (
        <div className="App">
            {todolists.map(tl => {
                let tasksForTodolist = tasks[tl.id];
                tasks[tl.id]=tasksForTodolist

                if (tl.filter === "active") {
                    tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
                }

                return <Todolist
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                />
            })}
        </div>
    );
}

export default App;
