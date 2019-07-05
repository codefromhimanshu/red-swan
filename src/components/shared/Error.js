import React from 'react'
import { Link } from 'react-router-dom'

import { HOME_PAGE_URL } from '../../constants/url'

import './style/error.css'

function ErrorComponent(props) {
  const { statusCode, statusText } = props
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>{`${statusCode} - ${statusText}`}</h2>
        </div>
        <Link to={HOME_PAGE_URL}>Go TO Homepage</Link>
      </div>
    </div>
  )
}

export default ErrorComponent
