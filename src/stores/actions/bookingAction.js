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
      type: 'GET_BOOKINGS_FAILED',
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

export const addBooking = (token, eventId, dates, address) => dispatch => {
  dispatch({type:'ADD_BOOKING_REQUEST'})

  return Axios({
    method: 'POST',
    url: `${url}/v1/api/company/booking`,
    headers: {
      auth: token
    },
    data: {
      id: eventId,
      date: dates,
      location: address
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

export const respondBooking = (token, id, status, confirmedDate, remarks) => dispatch => {
  dispatch({type: 'RESPOND_BOOKING_REQUEST'})

  return Axios({
    method: 'PUT',
    url: `${url}/v1/api/vendor/booking/${id}`,
    headers: {
      auth: token
    },
    data: {
      status: status,
      confirmedDate: status === 'Approved' ? confirmedDate : '',
      remarks: status === 'Rejected' ? remarks : ''
    }
  })
  .then(res => {
    dispatch({
      type: 'RESPOND_BOOKING_SUCCESS',
      bookings: res.data.data,
      message: res.data.message
    })
    dispatch(showAlert())    
  })
  .catch(err => {
    dispatch({
      type: 'RESPOND_BOOKING_FAILED',
      message: err.response ? err.response.data.message : err.message
    })
    dispatch(showAlert())

  })
}