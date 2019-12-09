import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieList from "../../MovieList/MovieList";
import { fetchPage } from "../../../actions/";

const GenreMoviesPage = props => {
  useEffect(() => {
    props.fetchPage(1, "genres", props.match.params.id);
  }, []);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default connect(null, { fetchPage })(GenreMoviesPage);
