import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Antd from './containers/Antd'
import EmployeeDetail from './containers/employee/EmployeeDetail'
import EmployeeList from './containers/employee/EmployeeList'
import TweetList from './containers/tweet/TweetList'

import {
  HOME_PAGE_URL,
  ABOUT_PAGE_URL,
  ANTD_DEMO_PAGE_URL,
  EMPLOYEE_DETAIL_URL,
  EMPLOYEE_LIST_URL,
  TWEET_LIST_URL
} from './constants/url'

const Routes = () => (
  <Switch>
    <Route exact path={HOME_PAGE_URL} component={Home} />
    <Route exact path={ABOUT_PAGE_URL} component={About} />
    <Route exact path={ANTD_DEMO_PAGE_URL} component={Antd} />
    <Route exact path={EMPLOYEE_LIST_URL} component={EmployeeList} />
    <Route exact path={TWEET_LIST_URL} component={TweetList} />
    <Route
      exact
      path={`${EMPLOYEE_DETAIL_URL}/:employeeId`}
      component={EmployeeDetail}
    />
  </Switch>
)

export default Routes
