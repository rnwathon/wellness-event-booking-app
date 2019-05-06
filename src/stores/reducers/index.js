import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {eventReducer} from './eventReducer';
import {bookingReducer} from './bookingReducer';
import {modalReducer} from './modalReducer';
import {locationReducer} from './locationReducer';

const appReducer = combineReducers({
  locationReducer,
  modalReducer,
  loginReducer,
  eventReducer,
  bookingReducer
})

export const rootReducer = (state, action) => {
  if(action.type === 'LOGOUT'){
    state = undefined;  
  }

  return appReducer(state, action)
}