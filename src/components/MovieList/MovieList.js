import React from "react";

import SimpleBar from "simplebar-react";
import PageList from "../PageList/PageList";
import { renderMovieCards } from "./renderMovieCards";

import "./css/movie-list.css";

const MovieList = ({ fetchedMovies }) => {
  if (fetchedMovies.results) {
    return (
      <SimpleBar
        className="simplebar-component"
        style={{ height: "100vh", autoHide: false }}
      >
        <div className="movie-list-container">
          {renderMovieCards(fetchedMovies)}
        </div>
        <PageList moviesType={fetchedMovies} />
      </SimpleBar>
    );
  } else return <div>Loading</div>;
};

export default MovieList;
