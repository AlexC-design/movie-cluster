import React from "react";
import MovieCard from "./MovieCard/MovieCard";

export const renderMovieCards = listOfMovies => {
  return listOfMovies.map((movie, index) => {
    return <MovieCard movieId={movie.id} key={movie.id} index={index} />;
  });
};
