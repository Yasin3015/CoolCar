import React from "react";
import "./ProductCard.css"; // للتنسيق الخاص بالمكون

const ProductCard = ({ data }) => {
  return (
    <div className="card-container">
      <div className="card-badge">{data.slogan}</div>
      <img src={data.image} alt={data.title} className="card-image" />
      <div className="card-content">
        <div className="content-text">
        <h3 className="card-price">{data.price} ر.س</h3>
        <h2 className="card-title">{data.title}</h2>
        <p className="card-description">{data.description}</p>
        </div>
        <button className="card-button">
          <span>&larr;</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
