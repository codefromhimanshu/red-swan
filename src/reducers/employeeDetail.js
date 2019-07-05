import {
  REQUESTED_EMPLOYEE_DETAIL,
  GET_EMPLOYEE_DETAIL,
  REQUEST_ERROR_EMPLOYEE_DETAIL,
  CLEAR_EMPLOYEE_DETAIL
} from '../constants/actionTypes'
import { employeeDetailInitialState, errorInitialState } from './initialState'

export default function(state = employeeDetailInitialState, action) {
  switch (action.type) {
    case REQUESTED_EMPLOYEE_DETAIL:
      return {
        ...state,
        isRequested: true
      }

    case GET_EMPLOYEE_DETAIL:
      return {
        ...state,
        ...action.payload,
        isRequested: !state.isRequested
      }

    case REQUEST_ERROR_EMPLOYEE_DETAIL: {
      const { statusCode, statusText, error } = action.payload
      return {
        ...errorInitialState,
        isRequested: !state.isRequested,
        error,
        statusCode,
        statusText
      }
    }

    case CLEAR_EMPLOYEE_DETAIL:
      return employeeDetailInitialState

    default:
      return state
  }
}
