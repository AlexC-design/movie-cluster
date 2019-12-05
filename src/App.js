import React, { useEffect } from "react";
import { connect } from "react-redux";

import MainScreen from "./components/MainScreen/MainScreen";
import { fetchConfig, fetchNowPlaying, fetchTopRated } from "./actions";

const App = ({ fetchConfig, fetchNowPlaying, fetchTopRated }) => {
  useEffect(() => {
    fetchConfig();
    fetchNowPlaying();
    fetchTopRated();
  }, [fetchConfig, fetchNowPlaying]);

  return (
    <div>
      <MainScreen />
    </div>
  );
};

export default connect(null, { fetchConfig, fetchNowPlaying, fetchTopRated })(
  App
);
