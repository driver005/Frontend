import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (weather = [], action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
            return action.payload;
        case 'CREATE_WEATHER':
            return [...weather, action.payload];
        default:
            return weather;
    }
};