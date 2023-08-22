import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (table = [], action) => {
    switch (action.type) {
        case 'FETCH_TABLE':
            return action.payload;
        case 'CREATE_TABLE':
            return [...table, action.payload];
        default:
            return table;
    }
};