import React from 'react'
import { Custominput } from '../../../../styles/todolist'

const CustomInput = ({icon, type, placeholder, autoComplete, value, name, onChange}) => (
    <div className="input-field purple-input input-icons">
        <i className={`${icon} icon`}></i>
        <Custominput 
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            name={name}
        />
    </div>
)

export { CustomInput }