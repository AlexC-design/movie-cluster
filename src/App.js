import React, { useEffect } from "react";
import { connect } from "react-redux";

import MainScreen from "./components/MainScreen/MainScreen";
import { fetchConfig, fetchNowPlaying } from "./actions";

const App = ({ fetchConfig, fetchNowPlaying }) => {
  useEffect(() => {
    fetchConfig();
    fetchNowPlaying();
  }, [fetchConfig, fetchNowPlaying]);

  return (
    <div>
      <MainScreen />
    </div>
  );
};

export default connect(null, { fetchConfig, fetchNowPlaying })(App);
