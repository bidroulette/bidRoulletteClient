import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

class About extends React.Component {
  render() {
    return (
      <>
      <Image/>
      <Carousel className="Carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Adrian.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Adrian Cosme-Halverson</h3>
            <p>Army veteran and software developer. Ready to start a new career in tech.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Amy.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Amy Pierce</h3>
            <p>Software developer and recovering financial consultant.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Miguel.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Miguel Rodriguez</h3>
            <p>
              Software developer with a background in store management. A fellow coffee enthusiast.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/David.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>David Tusia</h3>
            <p>Army veteran turned software developer with a background in logistics. Got permissions?</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/Square_Profile.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption>
          <h3>Jordan Yamada</h3>
            <p>
              Marine veteran with a background in air traffic control. Enjoying the creativity and puzzle-solving sides of code.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      </>
    )
  }
}

export default About;
