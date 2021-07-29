import React, {useState} from 'react'
import App from './App';
import '../../../../styles/todolist/App.css'
export function Tasks({dispatch}) {  
    return (
        <App dispatch={dispatch} />  
    )
}

