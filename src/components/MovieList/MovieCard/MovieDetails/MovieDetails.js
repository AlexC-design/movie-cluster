import React from "react";
import "./movie-details.css";
import RatingBar from "./RatingBar/RatingBar";

const MovieDetails = ({ fetchedMovies, index }) => {

  
  const overview = fetchedMovies.results[index].overview;
  const rating = fetchedMovies.results[index].vote_average;
  const releaseDate = fetchedMovies.results[index].release_date;

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="release-date">
          Release Date &emsp;
          {releaseDate}
        </div>
        <RatingBar rating={rating} />
        <div className="overview">{overview}</div>
      </div>
      <button className="see-more-button">See More</button>
    </div>
  );
};

export default MovieDetails;
