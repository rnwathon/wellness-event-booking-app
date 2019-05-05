export const showErrorAlert = () => dispatch => {
  dispatch({type:'SHOW_ERROR_ALERT'})
}

export const hideErrorAlert = () => dispatch => {
  dispatch({type:'HIDE_ERROR_ALERT'})
}