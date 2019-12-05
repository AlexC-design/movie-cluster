import React from "react";
import MovieImage from "./MovieImage/MovieImage";
import MovieDetails from "./MovieDetails/MovieDetails";
import "./css/movie-card.css";

const MovieCard = ({ movieId, index, fetchedMovies }) => {
  return (
    <div className="movie-card-container" key={`id:${movieId}`}>
      <MovieImage
        fetchedMovies={fetchedMovies}
        index={index}
        key={`${movieId}-image-${index}`}
      />
      <MovieDetails
        fetchedMovies={fetchedMovies}
        index={index}
        key={`${movieId}-details-${index}`}
      />
    </div>
  );
};

export default MovieCard;
