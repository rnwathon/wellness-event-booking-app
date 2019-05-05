import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {eventReducer} from './eventReducer';

export const rootReducer = combineReducers({
  loginReducer,
  eventReducer
})