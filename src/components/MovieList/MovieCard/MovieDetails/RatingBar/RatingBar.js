import React from "react";
import "./rating-bar.css";

const RatingBar = ({rating}) => {
  return (
    <div>
      <div className="rating-container">
        <div className="rating-bar">
          <span style={{width: `${rating*10}%`}}></span>
        </div>
        <div className="rating-percentage">{rating * 10} %</div>
      </div>
    </div>
  );
};

export default RatingBar;
