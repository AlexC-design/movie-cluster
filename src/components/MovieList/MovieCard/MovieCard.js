import React, { useEffect } from "react";
import MovieImage from "./MovieImage/MovieImage";
import MovieDetails from "./MovieDetails/MovieDetails";
import { connect } from "react-redux";
import "./css/movie-card.css";

const MovieCard = ({ movieId, index }) => {
  useEffect(() => {}, []);

  return (
    <div className="movie-card-container" key={`id:${movieId}`}>
      <MovieImage index={index} key={`${movieId}-image-${index}`} />
      <MovieDetails
        index={index}
        key={`${movieId}-details-${index}`}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { nowPlaying: state.nowPlaying };
};

export default connect(mapStateToProps)(MovieCard);
