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

const mapStateToProps = state => {
  return { currentPage: state.currentPage };
};

export default connect(mapStateToProps, { fetchPage })(PopularPage);
