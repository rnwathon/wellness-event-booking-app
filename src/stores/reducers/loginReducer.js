const initState = {
  isFetching: false,
  isLogin: false,
  token: '',
  name: '',
  role: ''
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
      token: action.token,
      name: action.name,
      role: action.role
    }
  }

  return state
}