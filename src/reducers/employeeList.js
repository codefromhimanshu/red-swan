import {
  REQUESTED_EMPLOYEE_LIST,
  GET_EMPLOYEE_LIST,
  REQUEST_ERROR_EMPLOYEE_LIST,
  CLEAR_EMPLOYEE_LIST
} from '../constants/actionTypes'
import { employeeListInitialState, errorInitialState } from './initialState'

export default function(state = employeeListInitialState, action) {
  switch (action.type) {
    case REQUESTED_EMPLOYEE_LIST:
      return {
        ...state,
        isRequested: true
      }

    case GET_EMPLOYEE_LIST:
      return {
        ...state,
        data: action.payload,
        isRequested: !state.isRequested
      }

    case REQUEST_ERROR_EMPLOYEE_LIST: {
      const { statusCode, statusText, error } = action.payload
      return {
        ...errorInitialState,
        isRequested: !state.isRequested,
        error,
        statusCode,
        statusText
      }
    }

    case CLEAR_EMPLOYEE_LIST:
      return employeeListInitialState

    default:
      return state
  }
}
