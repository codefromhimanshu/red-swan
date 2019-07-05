import { DECREMENT_REQUESTED, DECREMENT } from '../constants/actionTypes'

export function decrement() {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export function decrementAsync() {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    // call your async api here
    // axios or superagent
    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 1500)
  }
}
