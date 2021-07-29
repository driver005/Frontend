import React from 'react'
import { CustomButton } from '../../common'
import cx from 'classnames'
import './style.css'
import { Filterbycontainer } from '../../../../../styles/todolist'

const Filter = ({ filterBy, filters, dispatch }) => (
    <Filterbycontainer className="container filter-by center-text">
        {['All', 'Active', 'Done'].map((item, index) =>
            <CustomButton className={cx({ 'active-filter': filters.show === item })} key={index} onClick={() => {dispatch(filterBy(item))}}>
                {item}
            </CustomButton>
        )}
    </Filterbycontainer>
)



export default Filter