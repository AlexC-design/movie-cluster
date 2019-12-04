import React from "react";
import MovieImage from "./MovieImage/MovieImage";
import MovieDetails from "./MovieDetails/MovieDetails";
import { connect } from "react-redux";
import { fetchNowPlaying } from "../../../actions";
import "./css/movie-card.css";

const MovieCard = props => {
  return (
    <div className="movie-card-container">
      <div>movie card id: {props.movieId}</div>
      <MovieImage />
      <MovieDetails />
    </div>
  );
};

const mapStateToProps = state => {
  return { nowPlaying: state.nowPlaying };
};

export default connect(mapStateToProps, { fetchNowPlaying })(MovieCard);
