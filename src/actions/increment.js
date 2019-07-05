import { INCREMENT_REQUESTED, INCREMENT } from '../constants/actionTypes'

export function increment() {
  return dispatch => {
    dispatch({ type: INCREMENT_REQUESTED })
    dispatch({ type: INCREMENT })
  }
}

export function incrementAsync() {
  return dispatch => {
    dispatch({ type: INCREMENT_REQUESTED })

    // call your async api here
    // axios or superagent
    return setTimeout(() => {
      dispatch({ type: INCREMENT })
    }, 1500)
  }
}
