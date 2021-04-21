import { combineReducers } from 'redux';

import message from './message'
import users from './user'

const reducers = combineReducers({ message, users });

export default reducers;