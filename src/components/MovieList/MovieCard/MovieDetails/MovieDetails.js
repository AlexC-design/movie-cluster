import React from "react";
import { connect } from "react-redux";
import "./movie-details.css";
import RatingBar from "./RatingBar/RatingBar";

const MovieDetails = ({ overview, rating, releaseDate }) => {
  return (
    <div className='movie-details-container'>
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

const mapStateToProps = (state, ownProps) => {
  const { index } = ownProps;

  return {
    overview: state.nowPlaying.results[index].overview,
    rating: state.nowPlaying.results[index].vote_average,
    releaseDate: state.nowPlaying.results[index].release_date
  };
};

export default connect(mapStateToProps)(MovieDetails);
