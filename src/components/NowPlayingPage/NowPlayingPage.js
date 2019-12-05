import React from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";

const NowPlayingPage = ({ nowPlaying }) => {
  return (
    <div>
      <MovieList fetchedMovies={nowPlaying} />
    </div>
  );
};

const mapStateToProps = state => {
  return { nowPlaying: state.nowPlaying };
};

export default connect(mapStateToProps)(NowPlayingPage);
