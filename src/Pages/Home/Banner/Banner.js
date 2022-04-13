import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img height="600"
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/mechanic-man-repairing-car_1150-6496.jpg?t=st=1649825191~exp=1649825791~hmac=fb91f770e92f54711e688b03b9b9243d75325ec1f16bcf5a1c12a87197dccda4&w=1060"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="600"
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/man-opens-hood-car-repair-car-due-breakdown_1150-51915.jpg?w=1060"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="600"
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/business-man-is-driving-car-raining-day-with-moving-wiper-blades_1150-6582.jpg?w=1060"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;