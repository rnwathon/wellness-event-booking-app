const initState = {
  isFetching: false,
  countries: [],
  address: '',
  message: ''
}

export const locationReducer = (state=initState, action) => {

  if(action.type === 'GET_COUNTRIES_REQUEST' ||
    action.type === 'GET_ADDRESS_REQUEST'){
    return{
      ...state,
      isFetching: true
    }
  }

  if(action.type === 'GET_COUNTRIES_SUCCESS'){
    return{
      ...state,
      isFetching: false,
      countries: action.countries
    }
  }

  if(action.type === 'GET_ADDRESS_SUCCESS'){
    return{
      ...state,
      isFetching: false,
      message: action.message,
      address: action.address
    }
  }

  if(action.type === 'GET_ADDRESS_FAILED'){
    return{
      ...state,
      isFetching: false,
      message: action.message || 'get address failed',
      address: action.address
    }
  }

  if(action.type === 'RESET_ADDRESS'){
    return{
      ...state,
      address: ''
    }
  }

  return state
}