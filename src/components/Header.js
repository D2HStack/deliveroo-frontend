import React from "react";

// import logo
import logo from "../assets/img/Deliveroo_logo.png";

function Header({ restaurant }) {
  // const { restaurant } = props;
  // console.log("restaurant", restaurant);
  return (
    <>
      <div className="bg-header">
        <div className="logo-wide">
          <div className="logo-container">
            <img alt="deliveroo-logo" src={logo} className="logo" />
          </div>
          <hr className="hr"></hr>
        </div>

        <div className="restaurant">
          <div className="restaurant-information">
            <p className="restaurant-title">{restaurant.name}</p>
            <p className="restaurant-description">{restaurant.description}</p>
          </div>
          <img
            className="restaurant-img"
            alt={restaurant.name}
            src={restaurant.picture}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
