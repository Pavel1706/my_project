import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Face} from "./components/Face/Face";
import {Conversation} from "./components/Conversation/Conversation";
import {BrowserRouter, Route} from "react-router-dom";





const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content '>
                    <Route path='/Conversation' render={()=><Conversation />}/>
                    <Route path='/Face' render={()=><Face />}/>
                    <Route path='/news' />
                    <Route path='/music' />
                    <Route path='/settings' />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
