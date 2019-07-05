import { counterInitialState } from './initialState'
import {
  INCREMENT_REQUESTED,
  INCREMENT,
  DECREMENT_REQUESTED,
  DECREMENT
} from '../constants/actionTypes'

export default (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      // always return nextState as new reference or new state
      // never alter previousState state variable
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}
