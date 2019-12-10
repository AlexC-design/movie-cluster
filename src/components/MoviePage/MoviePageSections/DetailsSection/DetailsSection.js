import React from "react";
import { connect } from "react-redux";
import CircularRating from "./CircularRating";

const DetailsSection = ({ description }) => {
  return (
    <div className="details-section-container">
      <div className="description-container">
        <h1>Description</h1>
        <p>{description}</p>
      </div>
      <CircularRating />
    </div>
  );
};

const mapStateToProps = ({ movieDetails }) => {
  return { description: movieDetails.overview };
};

export default connect(mapStateToProps)(DetailsSection);
