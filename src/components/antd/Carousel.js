import React, { Fragment } from 'react'
import { Carousel, Divider } from 'antd'

import './style/carousel.css'

class CarouselDemo extends React.Component {
  onChange(a, b, c) {
    console.log(a, b, c)
  }

  render() {
    return (
      <Fragment>
        <Carousel afterChange={this.onChange}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <Divider />
      </Fragment>
    )
  }
}

export default CarouselDemo
