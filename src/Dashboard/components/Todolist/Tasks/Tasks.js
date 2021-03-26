import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FlipMove from 'react-flip-move';
import Task from './Task'
import SelectedTasks from './Selectors'
import DeleteAll from './DeleteAll'
import SortBy from './SortBy'
import Filter from './Filter'
import add from '../assets/add.svg'
import './style.css'
import { setTextFilter, sortByDate, sortByDeadline, filterBy } from '../../../../actions/todolist'
import CreatAlert from './CreatAlert'
import EditAlert from './EditAlert'
import Alert from './Alert'
import { Fragment } from 'react';
import { Paddingcontainer, Addcardcontainer, Addcard, Addcardcontainermobile, Taskwrapper } from '../../../styles/todolist';
import { Slide } from '@material-ui/core';

const Taskcomponent = ({tasks, filters, dispatch}) => {
    const [create, SetCreate] = useState(undefined)
    const [edit, SetEdit] = useState(undefined)
    const closeModal = () => SetCreate(undefined)
    const closeEdit = () => SetEdit(undefined)

    const handelCreat = () => {
        SetCreate(true)
    }

    const handelChange = (id) => {
        SetEdit(tasks?.find(task => task._id === id))
    }

    return (
    <Paddingcontainer className="container paddingContainer">
        <Addcardcontainer className='right-text add-card'>
          <Addcard onClick={() => handelCreat()}><i className="fa fa-plus"></i></Addcard>
        </Addcardcontainer>
        <Addcardcontainermobile className="add-card-mobile" to="/app/todolist/create">
            <img src={add} alt="add new task" />
        </Addcardcontainermobile>
        <SortBy setTextFilter={setTextFilter} sortByDate={sortByDate} sortByDeadline={sortByDeadline} filters={filters} dispatch={dispatch} />
        <Filter filterBy={filterBy} filters={filters} dispatch={dispatch} />
        <Taskwrapper className="tasks">
            <FlipMove
            duration={500}
            delay={10}
            easing={'cubic-bezier(0.25, 0.5, 0.75, 1)'}
            staggerDurationBy={30}
            staggerDelayBy={10}
            >
                <Fragment>
                {tasks?.filter(task => {
                    switch(filters.show) {
                        case 'All':
                            return task
                        case 'Active':
                            return !task.completed
                        case 'Done':
                            return !!task.completed
                        default:
                            return task
                    }
                }).map(task => <Task key={task._id} {...task} dispatch={dispatch} handelChange={handelChange} />)}
                </Fragment>
            </FlipMove>
        </Taskwrapper>
        {tasks?.length == null &&
            <div className="center-text empty-state">
                <h2>Start your day by adding some tasks!</h2>
                <Link to="/app/todolist/create" className="btn btn-rounded btn-outlined green-btn">
                    Add new Task
                </Link>
            </div>
        }
        {tasks?.length > 0 && <DeleteAll dispatch={dispatch} />}
        <CreatAlert alertMessage={create} closeModal={closeModal} dispatch={dispatch} />
        <EditAlert alertMessage={edit} closeModal={closeEdit} dispatch={dispatch}  />
    </Paddingcontainer>
)}

const ConnectedTasks = (state, props) => {
    return {
        tasks: SelectedTasks(state.todo.task, state.todo.filter),
        filters: state.todo.filter
}}

export default connect(ConnectedTasks)(Taskcomponent)

