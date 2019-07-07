import {
  GET_TWEET_LIST,
  GET_TWEET_LIST_SUCCESS,
  GET_TWEET_LIST_FAILURE,
  CLEAR_TWEET_LIST
} from '../constants/actionTypes'
import { tweetListInitialState, errorInitialState } from './initialState'

export default function(state = tweetListInitialState, action) {
  switch (action.type) {
    case GET_TWEET_LIST:
      return {
        ...state,
        isRequested: true
      }

    case GET_TWEET_LIST_SUCCESS:
      return {
        ...state,
        tweetList: action.payload,
        isRequested: !state.isRequested
      }

    case GET_TWEET_LIST_FAILURE: {
      const { statusCode, statusText, error } = action.payload
      return {
        ...errorInitialState,
        isRequested: !state.isRequested,
        error,
        statusCode,
        statusText
      }
    }

    case CLEAR_TWEET_LIST:
      return tweetListInitialState

    default:
      return state
  }
}
