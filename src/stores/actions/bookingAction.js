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