import React, { Fragment } from 'react'
import { Typography, Spin, Alert, Divider } from 'antd'
import Header from '../shared/Header'
import TopGrid from '../shared/TopGrid'
import Error from '../shared/Error'

class EmployeeList extends React.Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props
    this.props.requestEmployeeDetail(params.employeeId)
  }

  componentWillUnmount() {
    this.props.clearEmployeeDetail()
  }

  render() {
    const { employeeDetail } = this.props
    const { Title } = Typography

    if (employeeDetail.error) {
      return (
        <Error
          statusText={employeeDetail.statusText}
          statusCode={employeeDetail.statusCode}
        />
      )
    }

    return (
      <TopGrid>
        <Header />
        {employeeDetail.isRequested ? (
          <Spin size="large" />
        ) : (
          <Fragment>
            <Alert type="success" message="Sucess" showIcon banner />
            <Divider />
            <Title>Name: {employeeDetail.employee_name}</Title>
          </Fragment>
        )}
      </TopGrid>
    )
  }
}

export default EmployeeList
