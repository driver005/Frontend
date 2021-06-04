import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import todo from './todolist'
import posts from './posts';
import message from './message';
import crypto from './crypto';
import table from './table';
import weather from './weather';


export const reducers = combineReducers({ posts, auth, navigation, alerts, weather, todo, message, crypto, table });