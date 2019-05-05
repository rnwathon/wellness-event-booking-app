export const getEvents = () => dispatch => {
  dispatch({
    type: 'GET_EVENTS_REQUEST'
  })

  return setTimeout(() => {
    dispatch({
      type: 'GET_EVENTS_SUCCESS',
      events: [
        {name: 'Seminar'},
        {name: 'Medical Checkup'}
      ]
    })
  }, 1500)
}