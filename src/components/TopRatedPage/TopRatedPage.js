import React from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";

const TopRatedPage = ({ topRated }) => {
  return (
    <div>
      <MovieList fetchedMovies={topRated} />
    </div>
  );
};

const mapStateToProps = state => {
  return { topRated: state.topRated };
};

export default connect(mapStateToProps)(TopRatedPage);