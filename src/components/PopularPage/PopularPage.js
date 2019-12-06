import React from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";

const PopularPage = ({ popular }) => {
  return (
    <div>
      <MovieList fetchedMovies={popular} />
    </div>
  );
};

const mapStateToProps = state => {
  return { popular: state.popular };
};

export default connect(mapStateToProps)(PopularPage);
