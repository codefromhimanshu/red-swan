import React from 'react'
import Layout from './Layout'
import Typography from './Typography'
import Carousel from './Carousel'
import Header from '../shared/Header'
import TopGrid from '../shared/TopGrid'

function Antd() {
  return (
    <TopGrid>
      <Header />
      <Typography />
      <Carousel />
      <Layout />
    </TopGrid>
  )
}

export default Antd
