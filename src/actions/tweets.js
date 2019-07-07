import {
  CLEAR_TWEET_LIST,
  GET_TWEET_LIST,
  GET_TWEET_LIST_FAILURE,
  GET_TWEET_LIST_SUCCESS
} from '../constants/actionTypes'
import axios from 'axios'

import REACT_APP_API_BASE_URL from '../apis'

export function getTweetListSuccess(payload) {
  return { type: GET_TWEET_LIST_SUCCESS, payload }
}

export function clearEmployeeDetail() {
  return { type: CLEAR_TWEET_LIST }
}

export function getTweetListFailure(payload) {
  return { type: GET_TWEET_LIST_FAILURE, payload }
}

export function requestTweetList() {
  return dispatch => {
    dispatch({ type: GET_TWEET_LIST })

    const apiURL = `${REACT_APP_API_BASE_URL}/tweets`
    return axios
      .get(apiURL)
      .then(response => {
        dispatch(getTweetListSuccess(response.data))
      })
      .catch(error => {
        dispatch(
          getTweetListFailure({
            error: true,
            statusCode: error.response.status,
            statusText: error.response.statusText
          })
        )
      })
  }
}
