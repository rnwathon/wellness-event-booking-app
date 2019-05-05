import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {eventReducer} from './eventReducer';
import {bookingReducer} from './bookingReducer';

export const rootReducer = combineReducers({
  loginReducer,
  eventReducer,
  bookingReducer
})