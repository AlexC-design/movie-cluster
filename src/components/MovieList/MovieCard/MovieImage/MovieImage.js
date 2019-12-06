import React from "react";
import { connect } from "react-redux";
import "./movie-image.css";

const MovieImage = ({ fetchedMovies, index, backdropSizes, baseUrl }) => {
  const backdropPath = fetchedMovies.results[index].backdrop_path;
  const movieTitle = fetchedMovies.results[index].original_title;

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

const mapStateToProps = state => {
  if (state.config.images) {
    return {
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
