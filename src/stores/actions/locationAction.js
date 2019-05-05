import Axios from "axios";

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