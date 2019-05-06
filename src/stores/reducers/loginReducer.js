const initState = {
  isFetching: false,
  isLogin: false,
  token: '',
  name: '',
  role: '',
  message: ''
}

export const loginReducer = (state = initState, action) => {
  if(action.type === 'LOGIN_REQUEST'){
    return {
      ...state,
      isFetching: true
    }
  }

  if(action.type === 'LOGIN_SUCCESS'){
    return {
      ...state,
      isFetching: false,
      isLogin: true,
      id: action.id,
      token: action.token,
      name: action.name,
      role: action.role
    }
  }

  if(action.type === 'LOGIN_FAILED'){
    return {
      ...state,
      isFetching: false,
      message: action.message
    }
  }

  if(action.type === 'LOGOUT'){
    return {
      ...state,
      message: action.message,
    }
  }

  return state
}