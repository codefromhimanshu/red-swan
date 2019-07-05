import React from 'react'
import Header from '../shared/Header'
import TopGrid from '../shared/TopGrid'
import imgPlaceholder from '../../assets/images/placeholder.png'

import './style/about.css'

function About() {
  return (
    <TopGrid>
      <Header />
      <h1>About Page</h1>
      <p>Did you get here via Redux?</p>
      <img src={imgPlaceholder} alt="placeholder" height="300px" />
    </TopGrid>
  )
}

export default About
