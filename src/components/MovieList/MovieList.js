import React from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard/MovieCard";
import SimpleBar from "simplebar-react";

import "./css/movie-list.css";

const MovieList = ({ fetchedMovies }) => {
  function renderMovieCards(movieList) {
    return movieList.map((movie, index) => {
      return <MovieCard movieId={movie.id} key={movie.id} index={index} />;
    });
  }

  if (fetchedMovies.results)
    return (
      <SimpleBar
        className="simplebar-component"
        style={{ height: "100vh", autoHide: false }}
      >
        <div className="movie-list-container">
          {renderMovieCards(fetchedMovies.results)}
        </div>
      </SimpleBar>
    );
  else return <div>Loading</div>;
};

export default MovieList;
