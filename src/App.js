import React, { useEffect } from "react";
import { connect } from "react-redux";

import MainScreen from "./components/MainScreen/MainScreen";
import {
  fetchConfig,
  fetchNowPlaying,
  fetchTopRated,
  fetchPopular
} from "./actions";

const App = ({ fetchConfig, fetchNowPlaying, fetchTopRated, fetchPopular }) => {
  useEffect(() => {
    fetchConfig();
    fetchNowPlaying();
    fetchTopRated();
    fetchPopular();
  }, [fetchConfig, fetchNowPlaying]);

  return (
    <div>
      <MainScreen />
    </div>
  );
};

export default connect(null, {
  fetchConfig,
  fetchNowPlaying,
  fetchTopRated,
  fetchPopular
})(App);
