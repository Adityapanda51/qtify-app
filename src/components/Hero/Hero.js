import React from "react";
import "./Hero.css";
import headphoneImage from "../../Assets/headphone.png";

const Hero = () => {
  return (
    <div className="heroParent">
      <div className="heroContainer">
        <div className="heroText">
          <h3>100 Thousand Songs, ad-free</h3>
          <h3>Over thousands podcast episodes</h3>
        </div>
      </div>
      <div>
        <img
          src={headphoneImage}
          height="250px"
          width="250px"
          alt="headphoneImage"
        />
      </div>
    </div>
  );
};
export default Hero;
