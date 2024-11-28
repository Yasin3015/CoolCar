import React from "react";
import "./Hero.css";
import carImage from '../../../../assets/Images/hero.png'
import Button from "../../../../shared/Components/Button/Button";

const Hero = ({ title, subtitle, buttonText }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        {/* النص العلوي */}
        <h1>{title}</h1>
        <p>
          <span className="cta">اطلب الآن</span> {subtitle}
        </p>
        <img src={carImage} alt="Car with information" className="hero-image" />
        <br></br>
        <Button 
          title={buttonText}
          className={"hero-button"}
        />
      </div>
    </div>
  );
};

export default Hero;
