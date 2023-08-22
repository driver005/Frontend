import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (crypto = [], action) => {
    switch (action.type) {
        case 'FETCH_CRYPTO':
            return action.payload;
        case 'CREATE_CRYPTO':
            return {...crypto, [action.name]: action.payload};
        default:
            return crypto;
    }
};
