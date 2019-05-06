import Axios from "axios";
import {showAlert} from './modalAction';

export const getCountries = () => dispatch => {
  dispatch({type: 'GET_COUNTRIES_REQUEST'})

  return Axios({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code'
  })
  .then(res => {
    dispatch({
      type: 'GET_COUNTRIES_SUCCESS',
      countries: res.data
    })
  })
  .catch(err => {

  })
}

export const getAddress = (zipcode, country) => dispatch => {
  dispatch({type: 'GET_ADDRESS_REQUEST'})

  return Axios({
    method: 'GET',
    url: `https://geocode.xyz/${zipcode}?region=${country}&json=1&auth=304768920662027952282x2272`
  })
  .then(res => {
    res.data.matches === null ?
      dispatch({
        type: 'GET_ADDRESS_FAILED',
        message: 'Address is not found',
        address: ''
      })
      : 
      dispatch({
        type: 'GET_ADDRESS_SUCCESS',
        message: '',
        address: `${res.data.standard.addresst}, ${res.data.standard.city} ${res.data.standard.postal}`
      })
  })
  .catch(err => {
    dispatch({
      type: 'GET_ADDRESS_FAILED',
      message: 'Address is not found',
    })
    dispatch(showAlert());
  })
}