import React from "react";
import MovieCard from "./MovieCard/MovieCard";

export const renderMovieCards = (fetchedMovies) => {
  return fetchedMovies.results.map((movie, index) => {
    return (
      <MovieCard
        fetchedMovies={fetchedMovies}
        movieId={movie.id}
        key={movie.id}
        index={index}
      />
    );
  });
};
