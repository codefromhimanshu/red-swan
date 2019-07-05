import {
  REQUESTED_EMPLOYEE_LIST,
  GET_EMPLOYEE_LIST,
  CLEAR_EMPLOYEE_LIST,
  REQUEST_ERROR_EMPLOYEE_LIST
} from '../constants/actionTypes'
import axios from 'axios'

import REACT_APP_API_BASE_URL from '../apis'

export function getEmployeeList(payload) {
  return { type: GET_EMPLOYEE_LIST, payload }
}

export function clearEmployeeList() {
  return { type: CLEAR_EMPLOYEE_LIST }
}

export function requestErrorEmployeeList(payload) {
  return { type: REQUEST_ERROR_EMPLOYEE_LIST, payload }
}

export function requestEmployeeList() {
  return (dispatch, getState) => {
    dispatch({ type: REQUESTED_EMPLOYEE_LIST })

    const apiURL = `${REACT_APP_API_BASE_URL}/employees`
    return axios
      .get(apiURL)
      .then(response => {
        dispatch(getEmployeeList(response.data))
      })
      .catch(error => {
        dispatch(
          requestErrorEmployeeList({
            error: true,
            statusCode: error.response.status,
            statusText: error.response.statusText
          })
        )
      })
  }
}
