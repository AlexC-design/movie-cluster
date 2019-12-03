import React from "react";
import MovieImage from "./MovieImage/MovieImage";
import MovieDetails from "./MovieDetails/MovieDetails";

const MovieCard = () => {
  return (
    <div className="movie-card-container">
      <MovieImage />
      <MovieDetails />
    </div>
  );
};

export default MovieCard;
