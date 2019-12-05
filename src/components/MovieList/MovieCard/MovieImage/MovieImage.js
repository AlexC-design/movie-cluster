import React from "react";
import { connect } from "react-redux";

const MovieImage = ({ backdropSizes, backdropPath }) => {
  return (
    <div className="movie-image-container">
      <img
        className="movie-card-image"
        src={`https://image.tmdb.org/t/p/${
          backdropSizes[backdropSizes.length - 3]
        }/${backdropPath}`}
        alt="backdrop"
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { index } = ownProps;

  return {
    backdropPath: state.nowPlaying.results[index].backdrop_path,
    backdropSizes: state.config.images.backdrop_sizes
  };
};

export default connect(mapStateToProps)(MovieImage);
