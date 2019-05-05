import Axios from 'axios';
import {url} from './../../helpers/url';
import jwt from 'jsonwebtoken';
import {showAlert} from './modalAction';

export const login = (email, password) => dispatch => {
  dispatch({type: 'LOGIN_REQUEST'})

  // setTimeout(() => {
  //   dispatch({
  //     type: 'LOGIN_SUCCESS',
  //     role: 'vendor',
  //     token: '123'
  //   })
  // }, 500)

  return Axios({
    method: 'POST',
    url: `${url}/v1/api/login`,
    data: {
      'email': email,
      'password': password
    }
  })
  .then(res => {
    sessionStorage.setItem('token', res.data.token);
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

    dispatch(showAlert());
  })
}

export const checkLogin = () => dispatch => {
  const decoded = jwt.decode(sessionStorage.getItem('token'));
  if(decoded){
    dispatch({
      type: 'LOGIN_SUCCESS',
      name: decoded.name,
      role: decoded.role,
      token: sessionStorage.getItem('token')
    })
  }
}