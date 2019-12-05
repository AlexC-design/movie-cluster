import React, { useEffect } from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard/MovieCard";
import { fetchNowPlaying, fetchImages } from "../../actions";
import SimpleBar from "simplebar-react";

import "./css/movie-list.css";

const MovieList = ({ fetchNowPlaying, fetchImages, nowPlaying }) => {
  useEffect(() => {
    fetchNowPlaying();
    fetchImages(330457);
  }, []);

  function renderMovieCards(movieList) {
    return movieList.map((movie, index) => {
      return (
        <div>
          <MovieCard movieId={movie.id} index={index} />
        </div>
      );
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

export default connect(mapStateToProps, { fetchNowPlaying, fetchImages })(
  MovieList
);
