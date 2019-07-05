import React from 'react'
import { Table, Spin } from 'antd'
import ErrorBoundry from '../shared/ErrorBoundry'
import { Link } from 'react-router-dom'
import Header from '../shared/Header'
import TopGrid from '../shared/TopGrid'
import Error from '../shared/Error'

import { EMPLOYEE_DETAIL_URL } from '../../constants/url'

class EmployeeList extends React.Component {
  componentDidMount() {
    this.props.requestEmployeeList()
  }

  componentWillUnmount() {
    this.props.clearEmployeeList()
  }

  render() {
    const { employeeList } = this.props

    if (employeeList.error) {
      return (
        <Error
          statusText={employeeList.statusText}
          statusCode={employeeList.statusCode}
        />
      )
    }

    const dataSource = employeeList.data || []
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Name',
        dataIndex: 'employee_name',
        key: 'name',
        render: (text, record) => (
          <Link to={`${EMPLOYEE_DETAIL_URL}/${record.id}`}>{text}</Link>
        )
      }
    ]

    return (
      <TopGrid>
        <Header />
        <ErrorBoundry>
          {employeeList.isRequested ? (
            <Spin size="large" />
          ) : (
            <Table
              rowKey={dataSource => dataSource.id}
              dataSource={dataSource}
              columns={columns}
            />
          )}
        </ErrorBoundry>
      </TopGrid>
    )
  }
}

export default EmployeeList
