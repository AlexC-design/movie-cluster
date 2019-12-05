import React, { useEffect } from "react";
import { connect } from "react-redux";

import MainScreen from "./components/MainScreen/MainScreen";
import { fetchConfig } from "./actions";

const App = ({ fetchConfig }) => {
  useEffect(() => {}, []);
  fetchConfig();
  return (
    <div>
      <MainScreen />
    </div>
  );
};

export default connect(null, { fetchConfig })(App);
