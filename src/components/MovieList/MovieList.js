import React from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard/MovieCard";
import SimpleBar from "simplebar-react";

import "./css/movie-list.css";

const MovieList = ({ nowPlaying }) => {

  function renderMovieCards(movieList) {
    return movieList.map((movie, index) => {
      return <MovieCard movieId={movie.id} key={movie.id} index={index} />;
    });
  }

  if (nowPlaying.results)
    return (
      <SimpleBar
        className="simplebar-component"
        style={{ height: "100vh", autoHide: false }}
      >
        <div className="movie-list-container">
          {renderMovieCards(nowPlaying.results)}
        </div>
      </SimpleBar>
    );
  else return <div>Loading</div>;
};

const mapStateToProps = state => {
  return { nowPlaying: state.nowPlaying };
};

export default connect(mapStateToProps)(
  MovieList
);
