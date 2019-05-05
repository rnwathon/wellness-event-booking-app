const initState = {
  isError: false
}

export const modalReducer = (state=initState, action) => {
  if(action.type === 'SHOW_ERROR_ALERT'){
    return{
      isError: true
    }
  }

  if(action.type === 'HIDE_ERROR_ALERT'){
    return{
      isError: false
    }
  }
  
  return state
}