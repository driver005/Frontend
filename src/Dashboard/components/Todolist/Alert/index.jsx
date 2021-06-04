import React from 'react'
import { Modal  } from 'react-bootstrap'
import styled from 'styled-components'
import { startAddTask, startEditTask } from '../../../../actions/todolist'
import TaskForm from '../TaskForm'


const Modalcomponent = styled(Modal)`
    & > .modal-dialog {
        min-width: 40rem;
    }
`

const Alert = ({dispatch, alertMessage, closeModal, type}) => (
    <Modalcomponent
        show={!!alertMessage}
        onHide={closeModal}
        centered
        
    >
    <TaskForm
        task={type == 'edit' ? alertMessage : ''}
        onSubmit={task => {
            if(type == 'edit') dispatch(startEditTask(task._id, task))
            if(type == 'create') dispatch(startAddTask(task))
            closeModal
        }}
        closeModal={closeModal}
    />
    </Modalcomponent>
)

export default Alert