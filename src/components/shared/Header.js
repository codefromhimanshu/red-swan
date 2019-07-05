import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

import {
  HOME_PAGE_URL,
  ABOUT_PAGE_URL,
  ANTD_DEMO_PAGE_URL,
  EMPLOYEE_LIST_URL
} from '../../constants/url'

function Header() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to={HOME_PAGE_URL}>Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={ABOUT_PAGE_URL}>About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={ANTD_DEMO_PAGE_URL}>Ant Design Demo</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={EMPLOYEE_LIST_URL}>Employee List Module</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Header
