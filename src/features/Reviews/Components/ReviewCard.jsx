import React from "react";
import "./ReviewCard.css"; // التنسيق الخاص بالمكون

const ReviewCard = ({ data }) => {
  return (
    <div className="review-card-container">
      <div className="review-card-avatar">
        <img src={data.user.image} alt="Avatar" />
      </div>
      <div className="review-card-content">
        <div className="review-card-stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={index < data.rate ? "star filled" : "star"}
            >
              ★
            </span>
          ))}
        </div>
        <p className="review-card-comment">{data.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
