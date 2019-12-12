import React from "react";
import { connect } from "react-redux";
import CircularRating from "./CircularRating";

const DetailsSection = ({ description, genres }) => {
  return (
    <div className="details-section-background">
      <div className="details-section-container">
        <div className="description-container">
          <h1>Description</h1>
          <p className="description">{description}</p>
          <div className="genre-names">
            <p>Genres:</p>

            {/* <span style={{display:'inline-block', width:'100px'}}></span> */}
            <p className="just-genre-names">
              {genres
                ? genres.map(genre => (
                    <span key={genre.name}>&emsp;{genre.name}</span>
                  ))
                : "loading"}
            </p>
          </div>
        </div>
        <CircularRating />
      </div>
    </div>
  );
};

const mapStateToProps = ({ movieDetails }) => {
  return {
    description: movieDetails.overview,
    genres: movieDetails.genres
  };
};

export default connect(mapStateToProps)(DetailsSection);
