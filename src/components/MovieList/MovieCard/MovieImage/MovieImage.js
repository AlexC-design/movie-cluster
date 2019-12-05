import React from "react";
import { connect } from "react-redux";

const MovieImage = props => {
  return (
    <div className="movie-image-container">
      <img
        className="movie-card-image"
        src={`https://image.tmdb.org/t/p/${
          props.backdropSizes[props.backdropSizes.length - 3]
        }/${props.backdropPath}`}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { index } = ownProps;

  console.log(state.nowPlaying.results[index].backdrop_path);
  console.log(index);
  console.log(state.config.images.backdrop_sizes);

  return {
    backdropPath: state.nowPlaying.results[index].backdrop_path,
    backdropSizes: state.config.images.backdrop_sizes
  };
};

export default connect(mapStateToProps)(MovieImage);
