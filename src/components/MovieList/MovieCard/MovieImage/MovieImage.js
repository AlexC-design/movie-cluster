import React from "react";
import { connect } from "react-redux";
import "./movie-image.css";

const MovieImage = ({ backdropSizes, backdropPath, movieTitle, baseUrl }) => {
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

  return {
    backdropPath: state.nowPlaying.results[index].backdrop_path,
    backdropSizes: state.config.images.backdrop_sizes,
    baseUrl: state.config.images.base_url,
    movieTitle: state.nowPlaying.results[index].original_title
  };
};

export default connect(mapStateToProps)(MovieImage);
