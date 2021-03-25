import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import register from './register';
import todo from './todolist'

export const reducers = combineReducers({
  alerts,
  auth,
  navigation,
  register,
  todo
});
