import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./movie-image.css";
import get from "get-value";

const MovieImage = ({ backdropSizes, baseUrl, backdropPath, movieTitle }) => {
  const imageUrl = `${baseUrl}${
    backdropSizes[backdropSizes.length - 3]
  }${backdropPath}`;

  const imageStyling = {
    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <Link to="/movie">
      <div className="movie-image-container">
        <h1 className="movie-card-title">{movieTitle}</h1>
        <div className="movie-card-image-container">
          <div className="movie-card-image" style={imageStyling} />
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { index } = ownProps;

  return {
    backdropPath: get(state, `currentPage.results.${index}.backdrop_path`, ""),
    movieTitle: get(state, `currentPage.results.${index}.original_title`, ""),
    backdropSizes: get(state, "config.images.backdrop_sizes", ""),
    baseUrl: get(state, "config.images.base_url", "")
  };
};

export default connect(mapStateToProps)(MovieImage);
