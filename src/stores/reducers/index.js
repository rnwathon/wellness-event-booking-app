import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {eventReducer} from './eventReducer';
import {bookingReducer} from './bookingReducer';
import {modalReducer} from './modalReducer';

export const rootReducer = combineReducers({
  modalReducer,
  loginReducer,
  eventReducer,
  bookingReducer
})