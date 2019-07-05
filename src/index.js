import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import store from './store/configureStore'
import history from './history/createBrowserHistory'
import App from './App'

const target = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  target
)
