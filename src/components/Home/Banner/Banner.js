import React from 'react';
import {Carousel} from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="400"
                    src="https://i.ibb.co/CB1qZnL/bali-1.jpg"
                    alt="first slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="400"
                    src="https://i.ibb.co/xgw7ZwH/barcelona.jpg"
                    alt="second slide"
                   />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="400"
                    src="https://i.ibb.co/px3s9cZ/london.jpg"
                    alt="third slide"
                   />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;