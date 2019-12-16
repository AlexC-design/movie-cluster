import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";
import { fetchPage } from "../../actions";

const PopularPage = ({ fetchPage }) => {
  useEffect(() => {
    fetchPage(1, "popular");
  }, []);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default connect(null, { fetchPage })(PopularPage);
