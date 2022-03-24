import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (meeting = [], action) => {
    switch (action.type) {
        case 'FETCH_MEETINGS':
            return action.payload;
        case 'CREATE_MEETING':
            return [...meeting, action.payload];
        default:
            return meeting;
    }
};