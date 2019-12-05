import React, { useEffect } from "react";
import MovieImage from "./MovieImage/MovieImage";
import MovieDetails from "./MovieDetails/MovieDetails";
import { connect } from "react-redux";
import "./css/movie-card.css";

const MovieCard = ({ nowPlaying, movieId, index }) => {
  useEffect(() => {}, []);

  return (
    <div className={`movie-card-container`} key={`id:${movieId}`}>
      <MovieImage key={`${movieId}-image-${index}`} index={index} />
      <MovieDetails key={`${movieId}-details-${index}`} />
    </div>
  );
};

const mapStateToProps = state => {
  return { nowPlaying: state.nowPlaying };
};

export default connect(mapStateToProps)(MovieCard);
