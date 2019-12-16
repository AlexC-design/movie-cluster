import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";
import { fetchPage } from "../../actions";

const TopRatedPage = ({ fetchPage }) => {
  useEffect(() => {
    fetchPage(1, "top_rated");
  }, []);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default connect(null, { fetchPage })(TopRatedPage);
