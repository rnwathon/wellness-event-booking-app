const initState = {
  isFetching: false,
  bookings: []
}

export const bookingReducer = (state=initState, action) => {

  if(action.type === 'GET_BOOKINGS_REQUEST'){
    return {
      ...state,
      isFetching: true
    }
  }

  if(action.type === 'GET_BOOKINGS_SUCCESS'){
    return {
      ...state,
      isFetching: false,
      bookings: action.bookings
    }
  }

  if(action.type === 'GET_BOOKINGS_FAILED'){
    return {
      ...state,
      isFetching: false,
      message: action.message
    }
  }

  return state
}