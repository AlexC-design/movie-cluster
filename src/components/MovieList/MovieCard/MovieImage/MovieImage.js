import React from "react";
import { connect } from "react-redux";
import "./movie-image.css";

const MovieImage = ({ backdropSizes, baseUrl, backdropPath, movieTitle }) => {

  const imageUrl = `${baseUrl}${
    backdropSizes[backdropSizes.length - 3]
  }${backdropPath}`;

  const imageStyling = {
    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${imageUrl})`
  };

  return (
    <div className="movie-image-container">
      <h1 className="movie-card-title">{movieTitle}</h1>
      <div className="movie-card-image-container">
        <div className="movie-card-image" style={imageStyling} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { index } = ownProps;

  if (state.config.images) {
    return {
      backdropPath: state.currentPage.results[index].backdrop_path,
      movieTitle: state.currentPage.results[index].original_title,
      backdropSizes: state.config.images.backdrop_sizes,
      baseUrl: state.config.images.base_url
    };
  } else
    return {
      backdropSizes: "",
      baseUrl: ""
    };
};

export default connect(mapStateToProps)(MovieImage);
