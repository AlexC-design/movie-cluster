import React from "react";
import { connect } from "react-redux";

import SimpleBar from "simplebar-react";
import PageList from "../PageList/PageList";
import { renderMovieCards } from "./renderMovieCards";

import "./css/movie-list.css";

const MovieList = ({ listOfMovies }) => {
  if (listOfMovies) {
    return (
      <SimpleBar
        className="simplebar-component"
        style={{ height: "100vh", autoHide: false }}
      >
        <div className="movie-list-container">
          {renderMovieCards(listOfMovies)}
        </div>
        <PageList />
      </SimpleBar>
    );
  } else return <div>Loading</div>;
};

const mapStateToProps = state => {
  return { listOfMovies: state.currentPage.results };
};

export default connect(mapStateToProps)(MovieList);
