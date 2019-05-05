import Axios from "axios";
import {url} from './../../helpers/url';
import {showErrorAlert} from './modalAction';

export const getEvents = (token) => dispatch => {
  dispatch({
    type: 'GET_EVENTS_REQUEST'
  })

  return Axios({
    method: 'GET',
    url: `${url}/v1/api/vendor/event`,
    headers: {
      auth: token
    }
  })
  .then(res => {
    dispatch({
      type: 'GET_EVENTS_SUCCESS',
      events: res.data.data
    })
  })
  .catch(err => {
    dispatch({
      type: 'GET_EVENTS_FAILED',
      message: err.response ? err.response.data.message : err.message
    })

    dispatch(showErrorAlert())
  })
}