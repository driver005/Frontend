import React, { Component, useEffect, useState } from 'react'
import {Tasks} from '../../components/Todolist/Tasks'
import '../../styles/todolist/App.css'
import { startSetTasks } from '../../actions/todolist' 
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import '../../styles/todolist/App.css'
import { Colcomponent } from '../../styles/calendar'
import Widget from '../../components/Widget/Widget'

export default function Todolist() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startSetTasks());
  }, [currentId, dispatch]);
  return (
    <Colcomponent>
      <Widget>
        <Tasks dispatch={dispatch} />
      </Widget>
    </Colcomponent>
  )
}

