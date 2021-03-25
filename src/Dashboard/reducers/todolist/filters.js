// Filters Reducer
import * as actionType from '../../../constants/actionTypes';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    show: 'All'
}

export default (filters = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case actionType.TEXT:
            return {
                ...filters,
                text: action.text
            }
        case actionType.DEADLINE:
            return {
                ...filters,
                sortBy: 'deadline'
            }
        case actionType.DATE:
            return {
                ...filters,
                sortBy: 'date'
            }
        case actionType.FILTER:
            return {
                ...filters,
                show: action.by
            }
        default:
            return filters
    }
}