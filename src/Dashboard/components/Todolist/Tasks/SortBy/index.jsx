import React from 'react'
import { Filtercontainer, Filterinput, Filtersearch, Flexed, Filterselect } from '../../../../styles/todolist'
import './style.css'

const SortBy = ({ setTextFilter, sortByDate, sortByDeadline, filters, dispatch }) => (
    <Filtercontainer className="container filter-container">
        <Filtersearch className="tasks filter-search">
            <Flexed className="input-field purple-input search flexed">
                <Filterinput 
                    type="text" 
                    placeholder="Search for a task" 
                    autoComplete="off"
                    value={filters?.text} 
                    onChange={e => dispatch(setTextFilter(e.target.value))}
                />
                <Filterselect onChange={e => e.target.value === 'date' ? dispatch(sortByDate()) : dispatch(sortByDeadline())}>
                    <option selected disabled>Sort by</option>
                    <option value="date">Date</option>
                    <option value="deadline">Deadline</option>
                </Filterselect>
            </Flexed>
        </Filtersearch>
    </Filtercontainer>
)

export default SortBy