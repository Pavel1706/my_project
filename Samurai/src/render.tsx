import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    addPost,
    addPostMessage,
    ConversationArrayType,
    DreamTextType, mainStateType,
    MessageArrayType, state,
    StateType
} from "./Redux/State";




export let rerenderEntireTree = (props: StateType)=> {

    ReactDOM.render(
        <App state={props}/>,

        document.getElementById('root')
    );
}

reportWebVitals();

