import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";
import { fetchPage, clearPage } from "../../actions";

const NowPlayingPage = ({ fetchPage, clearPage }) => {
  useEffect(() => {
    fetchPage(1, "now_playing");

    // return () => {
    //   clearPage();
    // };
  }, []);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default connect(null, { fetchPage, clearPage })(NowPlayingPage);
