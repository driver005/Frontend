import React from 'react'
import Modal from 'react-modal'
import { startEditTask } from '../../../../../actions/todolist'
import TaskForm from '../TaskForm'


const customStyle = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      minWidth              : '40rem',
      background            : '#0b0e37'
    }
  }
  
const EditAlert = ({dispatch, alertMessage, closeModal}) => (
    <Modal
        isOpen={!!alertMessage}
        contentLabel="todo list"
        style={customStyle}
        overlayClassName="Overlay"
        onRequestClose={closeModal}
        ariaHideApp={false}
    >
    <TaskForm 
        task={alertMessage}
        onSubmit={task => {
            dispatch(startEditTask(task._id, task))
            closeModal
        }}
        closeModal={closeModal}
    />
    </Modal>
)

export default EditAlert