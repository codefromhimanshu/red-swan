import {
  REQUESTED_EMPLOYEE_DETAIL,
  GET_EMPLOYEE_DETAIL,
  CLEAR_EMPLOYEE_DETAIL,
  REQUEST_ERROR_EMPLOYEE_DETAIL
} from '../constants/actionTypes'
import axios from 'axios'

import REACT_APP_API_BASE_URL from '../apis'

export function getEmployeeDetail(payload) {
  return { type: GET_EMPLOYEE_DETAIL, payload }
}

export function clearEmployeeDetail() {
  return { type: CLEAR_EMPLOYEE_DETAIL }
}

export function requestErrorEmployeeDetail(payload) {
  return { type: REQUEST_ERROR_EMPLOYEE_DETAIL, payload }
}

export function requestEmployeeDetail(employeeId) {
  return (dispatch, getState) => {
    dispatch({ type: REQUESTED_EMPLOYEE_DETAIL })

    const apiURL = `${REACT_APP_API_BASE_URL}/employee/${employeeId}`
    return axios
      .get(apiURL)
      .then(response => {
        dispatch(getEmployeeDetail(response.data))
      })
      .catch(error => {
        dispatch(
          requestErrorEmployeeDetail({
            error: true,
            statusCode: error.response.status,
            statusText: error.response.statusText
          })
        )
      })
  }
}
