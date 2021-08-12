import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Face} from "./components/Face/Face";
import {Conversation} from "./components/Conversation/Conversation";
import {BrowserRouter, Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {addPost, addPostMessage, DreamTextType, MessageArrayType, StateType} from "./Redux/State";


type AppStateType = {
    state: StateType

}



const App = (props: AppStateType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav dialogs={props.state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content '>
                    <Route path='/Conversation' render={()=><Conversation state={props.state} addNewPosts={addPostMessage} />}/>
                    <Route path='/Face' render={()=><Face posts={props.state} addPost={addPost} />}/>
                    <Route path='/news' />
                    <Route path='/music' />
                    <Route path='/settings' />
                    <Route path='/Friends' render={()=> <Friends dialogs={props.state.dialogsPage.dialogs} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
