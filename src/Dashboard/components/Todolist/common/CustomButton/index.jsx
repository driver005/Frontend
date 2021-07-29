import React from 'react'
import { Custombutton } from '../../../../../styles/todolist'

const CustomButton = ({ typeBtn, onClick, children, className = '' }) => (
    <Custombutton type={typeBtn} onClick={onClick} className={`btn btn-rounded btn-outlined purple-btn ${className}`}>
        {children}
    </Custombutton>
)

export { CustomButton }