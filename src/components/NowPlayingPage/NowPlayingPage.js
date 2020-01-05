import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";
import { fetchPage } from "../../actions";

const NowPlayingPage = ({ fetchPage }) => {
  useEffect(() => {
    fetchPage(1, "now_playing");
  }, []);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default connect(null, { fetchPage })(NowPlayingPage);
