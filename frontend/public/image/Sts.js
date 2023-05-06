import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Sts = () => {
  return (
    <>
    <Carousel fade variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\image\car1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./image/car2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"600px"}}
          src="https://stylephotos.ca/news/show/how-to-create-great-watch-photos--photography-of-watches-tips-and-pitfall"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Sts
