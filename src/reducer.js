import { combineReducers } from 'redux';
import { reducers } from './reducers';
import { reducer } from './Dashboard/reducers'

export const reducerall = combineReducers({ reducer, reducers });