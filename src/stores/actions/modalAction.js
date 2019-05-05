export const showAlert = () => dispatch => {
  dispatch({type:'SHOW_ALERT'})
}

export const hideAlert = () => dispatch => {
  dispatch({type:'HIDE_ALERT'})
}