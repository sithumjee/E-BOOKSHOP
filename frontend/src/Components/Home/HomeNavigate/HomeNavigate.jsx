import React from "react";
import "./HomeNavigate.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeNavigate = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="navigator">
      <h1>NAVIGATE FROM HERE</h1>
      <Carousel responsive={responsive}>
        <div className="card-navigate">
          <h3>Romance</h3>
        </div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </div>
  );
};

export default HomeNavigate;
