const initState = {
  isFetching: false,
  countries: []
}

export const locationReducer = (state=initState, action) => {

  if(action.type === 'GET_COUNTRIES_REQUEST'){
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
  
  return state
}