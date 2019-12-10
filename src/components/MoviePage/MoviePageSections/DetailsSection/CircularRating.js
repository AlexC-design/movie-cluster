import React from "react";
import { connect } from "react-redux";

const CircularRating = ({rating}) => {
  var ratingSize = 200;
  const strokeDasharray = 502;

  return (
    <div className="circular-rating-container">
      <div className="rating-percentage"> {`${rating}%`}</div>
      <svg width={`${ratingSize}`} height={`${ratingSize}`}>
        <circle
          cx={`${ratingSize / 2}`}
          cy={`${ratingSize / 2}`}
          r={`${(ratingSize / 2) * 0.8}`}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDasharray - rating * 5}
        />
      </svg>
    </div>
  );
};

const mapStateToProps = ({ movieDetails }) => {
  return { rating: movieDetails.vote_average*10 };
};

export default connect(mapStateToProps)(CircularRating);