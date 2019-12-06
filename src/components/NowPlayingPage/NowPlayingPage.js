import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";
import { fetchPage } from "../../actions";

const NowPlayingPage = ({ currentPage, fetchPage }) => {
  useEffect(() => {
    fetchPage(1, "now_playing");
  }, []);

  return (
    <div>
      <MovieList fetchedMovies={currentPage} />
    </div>
  );
};

const mapStateToProps = state => {
  return { currentPage: state.currentPage };
};

export default connect(mapStateToProps, { fetchPage })(NowPlayingPage);
