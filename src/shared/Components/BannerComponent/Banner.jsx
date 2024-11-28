import React from 'react';
import './Banner.css';
import Button from '../Button/Button';

const BannerComponent = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className="banner"
    >
      <div className="container banner-container">
      
      <div className="banner-content">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-subtitle">{subtitle}</p>
        <Button
            className="banner-button"
            title={buttonText}
            onButtonClick={onButtonClick}
        />
      </div>
      <div>
        <img src={imageUrl} alt="Banner" />
      </div>
      </div>
    </div>
  );
};

export default BannerComponent;
