import React from "react";
import "./SrviceCard.css";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
    </div>
  );
};

export default ServiceCard;
