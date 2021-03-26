import { combineReducers } from 'redux';

import task from './tasks'
import filter from './filters'

const todo = combineReducers({ 
    task,
    filter 
});

export default todo