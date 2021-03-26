import React from 'react'
import { connect } from 'react-redux'
import { startDeleteAll } from '../../../../../actions/todolist'
import { Deleteallbutton, Deleteallcontainer } from '../../../../styles/todolist'

const DeleteAll = ({ dispatch }) => (
    <Deleteallcontainer className="center-text delete-all">
        <Deleteallbutton onClick={() => dispatch(startDeleteAll())} className="btn btn-rounded btn-outlined red-btn">
            Delete All
        </Deleteallbutton>
    </Deleteallcontainer>
)

export default DeleteAll