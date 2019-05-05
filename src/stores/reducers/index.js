import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {eventReducer} from './eventReducer';
import {bookingReducer} from './bookingReducer';
import {modalReducer} from './modalReducer';
import {locationReducer} from './locationReducer';

export const rootReducer = combineReducers({
  locationReducer,
  modalReducer,
  loginReducer,
  eventReducer,
  bookingReducer
})