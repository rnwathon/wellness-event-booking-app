import Axios from "axios";
import {url} from './../../helpers/url';
import {showAlert} from './modalAction';

export const getBookingsByCompany = (token) => dispatch => {
  dispatch({type:'GET_BOOKINGS_REQUEST'})

  return Axios({
    method: 'GET',
    url: `${url}/v1/api/company/booking`,
    headers: {
      auth: token
    }
  })
  .then(res => {
    dispatch({
      type: 'GET_BOOKINGS_SUCCESS',
      bookings: res.data.data
    })
  })
  .catch(err => {
    dispatch({
      type: 'GET_BOOKINGS_SUCCESS',
      message: err.response ? err.response.data.message : err.message
    })
    dispatch(showAlert())
  })
}

export const getBookingsByVendor = (token) => dispatch => {
  dispatch({type:'GET_BOOKINGS_REQUEST'})

  return Axios({
    method: 'GET',
    url: `${url}/v1/api/vendor/booking`,
    headers: {
      auth: token
    }
  })
  .then(res => {
    dispatch({
      type: 'GET_BOOKINGS_SUCCESS',
      bookings: res.data.data
    })
  })
  .catch(err => {
    dispatch({
      type: 'GET_BOOKINGS_SUCCESS',
      message: err.response ? err.response.data.message : err.message
    })
    dispatch(showAlert())
  })
}

export const addBooking = (token, eventId, dates, location) => dispatch => {
  dispatch({type:'ADD_BOOKING_REQUEST'})

  return Axios({
    method: 'GET',
    url: `${url}/v1/api/company/booking`,
    headers: {
      auth: token
    }
  })
  .then(res => {
    dispatch({
      type: 'ADD_BOOKING_SUCCESS',
      message: res.data.message,
      bookings: res.data.data
    })
    dispatch(showAlert())
  })
  .catch(err => {
    dispatch({
      type: 'ADD_BOOKING_FAILED',
      message: err.response ? err.response.data.message : err.message
    })
    dispatch(showAlert())
  })
}