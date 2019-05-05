const initState = {
  isFetching: false,
  events: []
}

export const eventReducer = (state = initState, action) => {

  if(action.type === 'GET_EVENTS_REQUEST' ||
    action.type === 'ADD_EVENT_REQUEST'){
      return {
        ...state,
        isFetching: true
      }
  }

  if(action.type === 'GET_EVENTS_SUCCESS'){
    return {
      ...state,
      isFetching: false,
      events: action.events
    }
  }

  return state
}