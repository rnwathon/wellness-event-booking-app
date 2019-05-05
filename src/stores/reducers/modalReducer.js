const initState = {
  isOpen: false
}

export const modalReducer = (state=initState, action) => {
  if(action.type === 'SHOW_ALERT'){
    return{
      isOpen: true
    }
  }

  if(action.type === 'HIDE_ALERT'){
    return{
      isOpen: false
    }
  }
  
  return state
}