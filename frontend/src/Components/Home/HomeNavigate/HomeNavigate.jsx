import React from "react";
import "./HomeNavigate.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fiction from "../../Assets/navigatationImages/fiction.jpg";
import romance from "../../Assets/navigatationImages/romance.jpg";
import adventure from "../../Assets/navigatationImages/adventure.jpg";
import art from "../../Assets/navigatationImages/art.jpg";
import business from "../../Assets/navigatationImages/bussiness.jpg";
import children from "../../Assets/navigatationImages/children.jpg";
import cookbooks from "../../Assets/navigatationImages/cookbooks.jpg";
import health from "../../Assets/navigatationImages/health.jpg";
import history from "../../Assets/navigatationImages/history.jpg";
import mistery from "../../Assets/navigatationImages/mistory.jpg";
import personalDevelopment from "../../Assets/navigatationImages/personalDevelopment.jpg";
import philosophy from "../../Assets/navigatationImages/philosophy.jpg";
import poetry from "../../Assets/navigatationImages/poetry.jpg";
import religion from "../../Assets/navigatationImages/religion.jpg";
import sports from "../../Assets/navigatationImages/sports.jpg";

const HomeNavigate = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
        <div
          className="card-navigate"
          style={{ backgroundImage: `url(${fiction})` }}
        >
          <h3>Fiction</h3>
        </div>
        <div
          className="card-navigate"
          style={{ backgroundImage: `url(${romance})` }}
        >
          <h3>Romance</h3>
        </div>
        <div className="card-navigate">
          <h3>Mystery and Triller</h3>
        </div>
        <div className="card-navigate">
          <h3>History</h3>
        </div>
        <div className="card-navigate">
          <h3>Personal Development</h3>
        </div>
        <div className="card-navigate">
          <h3>Business and Money</h3>
        </div>
        <div className="card-navigate">
          <h3>Cookbooks</h3>
        </div>
        <div className="card-navigate">
          <h3>Children</h3>
        </div>
        <div className="card-navigate">
          <h3>Adventure</h3>
        </div>
        <div className="card-navigate">
          <h3>Health and Wellness</h3>
        </div>
        <div className="card-navigate">
          <h3>Philosophy</h3>
        </div>
        <div className="card-navigate">
          <h3>Art and Photography</h3>
        </div>
        <div className="card-navigate">
          <h3>Poetry</h3>
        </div>
        <div className="card-navigate">
          <h3>Religion</h3>
        </div>
        <div className="card-navigate">
          <h3>Sports</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeNavigate;
