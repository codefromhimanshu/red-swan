import React from 'react'
import { Row, Col } from 'antd'

function TopGrid(props) {
  return (
    <Row>
      <Col
        xs={{ span: 20, offset: 2 }}
        md={{ span: 18, offset: 3 }}
        lg={{ span: 16, offset: 4 }}>
        {props.children}
      </Col>
    </Row>
  )
}

export default TopGrid
