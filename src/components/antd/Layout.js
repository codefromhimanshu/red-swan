import React from 'react'
import { Layout, Divider } from 'antd'

function LayoutDemo() {
  const { Header, Footer, Content } = Layout

  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      <Divider />
      <br />
    </div>
  )
}

export default LayoutDemo
