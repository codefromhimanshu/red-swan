import { combineReducers } from 'redux'
import counter from './counter'
import employeeDetail from './employeeDetail'
import employeeList from './employeeList'
import tweets from './tweetList'

export default combineReducers({
  counter,
  employeeDetail,
  employeeList,
  tweets
})
