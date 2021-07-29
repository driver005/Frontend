import React, {useState} from 'react'
import { motion } from "framer-motion";
import cx from 'classnames'
import { startRemoveTask, startCompletedTask, startUnCompletedTask } from '../../../../../actions/todolist'
import { Completedinput, Completedi, Taskcomponent, Taskdeletebutton, Taskspan, Editpart, Editpartlink, Taskparameter, Taskparameterdiv, Taskparameterh4, Taskparametertime, Taskcontent } from '../../../../../styles/todolist'

const spring = {
  type: "spring",
  damping: 25,
  stiffness: 120
};
const Task = ({ dispatch, handelChange, _id, name, type, completed, createdAt, day, updatedAt, userid, __v }) => (
    <motion.div 
        initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
        animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
        exit={{ x: -400, opacity: 0, transition: { duration: 0.5 }, }}
        whileHover={{
            scale: 1.04,
            transition: { type: "spring", duration: 0.1 },
        }}
    >
    
    <Taskcomponent className={cx('single-task', { 'single-task-done': completed })}>
        <Taskdeletebutton className="right-text delete">
            <a onClick={() => dispatch(startRemoveTask({ id: _id }))}>
                <i className="fas fa-times" style={{color: 'red'}}></i>
            </a>
        </Taskdeletebutton>
        <Taskcontent className="task-content">
            <div className="content">
                <Taskparameter>
                    <legend>Name</legend>
                    <Taskparameterh4 className={cx({ 'completed': completed })}>
                        {name}
                    </Taskparameterh4>
                </Taskparameter>
                <Taskparameter>
                    <legend>Type</legend>
                    <Taskparameterdiv style={{float: 'left'}}>
                        <Taskspan className={`badge ${type}`}>
                            {type}
                        </Taskspan>
                    </Taskparameterdiv>
                </Taskparameter>
                <Taskparameter>
                    <legend>Day</legend>
                    <Taskparametertime>
                        <time>
                            {`${new Date(day).getFullYear()}-${new Date(day).getMonth()}-${new Date(day).getDate()}`}
                        </time>
                    </Taskparametertime>
                </Taskparameter>
            </div>
            <div className="complete">
                <label>
                    <Completedinput 
                        type="checkbox" 
                        className="green-checkbox"
                        defaultChecked={`${ completed ? 'checked' : '' }`}
                        onClick={() => {
                            completed ? dispatch(startUnCompletedTask({ id: _id })) : dispatch(startCompletedTask({ id: _id }))
                        }}
                    />
                    <Completedi className="fas fa-check"></Completedi>
                </label>
            </div>
        </Taskcontent>
        <Editpart className="edit-part" >
            <button className="edit" onClick={() => handelChange(_id)} style={{border: 'none', outline: 'none'}}>
                Edit <i className="far fa-edit"></i>
            </button>
        </Editpart>
        </Taskcomponent>
        </motion.div>
)

export default Task