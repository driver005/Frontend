import { DATE, DEADLINE, FILTER, TEXT } from "../constants/actionTypes"
import * as api from '../api/index';

// FILTER
export const setTextFilter = (text = '') => dispatch => dispatch({ type: TEXT, text })
export const sortByDate = () => dispatch => dispatch({ type: DATE })
export const sortByDeadline = () => dispatch => dispatch({ type: DEADLINE })
export const filterBy = value => dispatch => dispatch({ type: FILTER, by: value })

//TASK
export const addTask = tasksToDo => ({ type: 'ADD_TASK', tasksToDo })
export const removeTask = ({ id } = {}) => ({ type: 'DELETE_TASK', id })
export const editTask = (id, updates) => ({ type: 'EDIT_TASK', id, updates })
export const completedTask = ({ id } = {}) => ({ type: 'SET_TO_COMPLETE', id })
export const uncompletedTask = ({ id } = {}) => ({ type: 'SET_TO_UNCOMPLETED', id })
export const deleteAll = () => ({ type: 'DELETE_ALL' })
export const setTasks = tasksToDo => ({ type: 'SET_TASKS', tasksToDo })

// Functions
export const startAddTask = (taskData = {}) => async (dispatch) => {
    const { name = '', type = '', day = '', completed = false, } = taskData
    const formData = { name, type, day, completed }
    await api.createTask(formData)
        .then((data) => dispatch({ type: 'ADD_TASK', payload: data.data.tasks }))
}

export const startRemoveTask = ({ id } = {}) => async (dispatch) => {
    await api.deleteTask(id)
        .then(() => dispatch({ type: 'DELETE_TASK', payload: id }))
        .catch(err => console.log(`something went wrong: ${err}`))
}

export const startEditTask = (id, updates) => async (dispatch) => {
    await api.updateTask(id, updates)
        .then((data) => dispatch({ type: 'EDIT_TASK', payload: data.data.tasks }))
        .catch(err => console.log(`something went wrong: ${err}`))
}

export const startCompletedTask = ({ id } = {}) => async (dispatch) => {
    await api.updateTask(id, { 'completed': true })
        .then((data) => dispatch({ type: 'SET_TO_COMPLETE', payload: data.data.tasks }))
        .catch(err => console.log(`something went wrong: ${err}`))
}

export const startUnCompletedTask = ({ id } = {}) => async (dispatch) => {
    await api.updateTask(id, { 'completed': false })
        .then((data) => dispatch({ type: 'SET_TO_UNCOMPLETED', payload: data.data.tasks }))
        .catch(err => console.log(`something went wrong: ${err}`))
}

export const startDeleteAll = () => async (dispatch) => {
    await api.deleteallTask()
        .then(() => dispatch({ type: 'DELETE_ALL' }))
        .catch(err => console.log(`something went wrong: ${err}`))
}

export const startSetTasks = () => async (dispatch) => {
    await api.fetchTasks()
        .then(data => {
            dispatch({ type: 'SET_TASKS', payload: data.data.tasks })
        })
        .catch(err => console.log(`something went wrong: ${err}`))
}