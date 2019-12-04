import React, { useEffect } from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard/MovieCard";
import { fetchNowPlaying } from "../../actions";

import "./css/movie-list.css";

const MovieList = ({ fetchNowPlaying, nowPlaying }) => {
  useEffect(() => {
    console.log(fetchNowPlaying());
  }, []);

  console.log(nowPlaying);

  function renderMovieCards(movieList) {
    return movieList.map(movie => {
      console.log(`movie card ${movie.id}`);
      return (
        <div>
          <MovieCard movieId={movie.id} />
        </div>
      );
    });
  }

  if (nowPlaying.results)
    return (
      <div className="movie-list-container">
        {renderMovieCards(nowPlaying.results)}
        {console.log(nowPlaying.results)}
      </div>
    );
  else return <div>Loading</div>;
};

const mapStateToProps = state => {
  return { nowPlaying: state.nowPlaying };
};

export default connect(mapStateToProps, { fetchNowPlaying })(MovieList);
