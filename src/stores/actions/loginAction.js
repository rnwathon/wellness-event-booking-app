import Axios from 'axios';
import {url} from './../../helpers/url';
import jwt from 'jsonwebtoken';

export const login = (email, password) => dispatch => {
  dispatch({type: 'LOGIN_REQUEST'})

  return Axios({
    method: 'POST',
    url: `${url}/v1/api/login`,
    data: {
      'email': email,
      'password': password
    }
  })
  .then(res => {
    const decoded = jwt.decode(res.data.token);
    dispatch({
      type: 'LOGIN_SUCCESS',
      name: decoded.name,
      role: decoded.role,
      token: res.data.token
    })
  })
  .catch(err => {
    dispatch({
      type: 'LOGIN_FAILED',
      message: err.response ? err.response.data.message : err.message
    })
  })
}