import React, { useState, useEffect } from "react";
import { Router, Route, Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Logo from "../LandingPage/Logo/Logo";
import LandingPage from "../LandingPage/LandingPage";
import NowPlayingPage from "../NowPlayingPage/NowPlayingPage";
import history from "../../history";

import "./main-screen.css";

const MainScreen = () => {
  const [pageStatus, setPageStatus] = useState(`${history.location.pathname}`);
  const [logoSize, setLogoSize] = useState(
    `${history.location.pathname === "/" ? "large" : "small"}`
  );

  useEffect(() => {
    history.listen((location, action) => {
      setPageStatus(location.pathname);
      setLogoSize(location.pathname === "/" ? "large" : "small");
    });
  }, []);

  return (
    <div className="main-screen">
      <Router history={history}>
        <NavBar pageStatus={pageStatus} />
        <Link to="/">
          <Logo contentShape="logotype" size={logoSize} />
        </Link>
        <Route path="/" exact component={LandingPage} />
        <Route path="/now-playing" exact component={NowPlayingPage} />
      </Router>
      <div className='main-screen-bg' />
    </div>
  );
};

export default MainScreen;
