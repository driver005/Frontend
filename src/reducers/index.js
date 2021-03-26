import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import todo from './todolist'
import posts from './posts';




export const reducers = combineReducers({ posts, auth, navigation, alerts, todo });
