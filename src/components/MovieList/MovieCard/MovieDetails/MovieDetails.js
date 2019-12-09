import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./movie-details.css";
import RatingBar from "./RatingBar/RatingBar";

const MovieDetails = ({ overview, rating, releaseDate, id }) => {
  useEffect(() => {
    //cropping long descriptions
    const divs = document.getElementsByClassName("overview");

    for (let i = 0; i < divs.length; i++) {
      if (divs[i].innerHTML.length > 350) {
        divs[i].innerHTML = divs[i].innerHTML.substring(0, 350);
        divs[i].innerHTML += `...`;
      }
    }
  }, []);

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
      <Link className="button-link" to={`/movie/${id}`}>
        <button className="see-more-button">See More</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { index } = ownProps;

  return {
    overview: state.currentPage.results[index].overview,
    rating: state.currentPage.results[index].vote_average,
    releaseDate: state.currentPage.results[index].release_date
  };
};

export default connect(mapStateToProps)(MovieDetails);
