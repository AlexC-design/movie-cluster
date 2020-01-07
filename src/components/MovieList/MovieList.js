import React, { useEffect } from "react";
import { connect } from "react-redux";

import SimpleBar from "simplebar-react";
import PageList from "../PageList/PageList";
import { renderMovieCards } from "./renderMovieCards";

import "./css/movie-list.css";

const MovieList = ({ listOfMovies, genres }) => {
  useEffect(() => {});

  const historyToPageTitle = {
    "#/now-playing": "New Movies in Theaters Now",
    "#/top-rated": "All Time Top Voted Movies",
    "#/popular": "Popular Movies Right Now"
  };

  const renderPageTitle = path => {
    if (path.includes("#/genres")) {
      return genres.map(genre => {
        if (genre.id === parseInt(path.replace("#/genres/", ""), 10)) {
          return `${genre.name} Movies`;
        }
      });
    } else {
      return historyToPageTitle[path];
    }
  };

  if (listOfMovies && listOfMovies.length) {
    return (
      <SimpleBar className="simplebar-component" style={{ autoHide: false }}>
        <div className="movie-list-container">
          <h1 className="list-title">
            {renderPageTitle(window.location.hash)}
          </h1>
          {renderMovieCards(listOfMovies)}
        </div>
        <PageList />
      </SimpleBar>
    );
  } else return <div>Loading</div>;
};

const mapStateToProps = state => {
  return {
    listOfMovies: state.currentPage.results,
    genres: state.genres
  };
};

export default connect(mapStateToProps)(MovieList);
