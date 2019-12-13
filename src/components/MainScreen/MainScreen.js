import React, { useState, useEffect } from "react";
import { Router, Route, Link } from "react-router-dom";
import history from "../../history";

import NavBar from "../NavBar/NavBar";
import Logo from "../LandingPage/Logo/Logo";
import LandingPage from "../LandingPage/LandingPage";
import NowPlayingPage from "../NowPlayingPage/NowPlayingPage";
import TopRatedPage from "../TopRatedPage/TopRatedPage";
import PopularPage from "../PopularPage/PopularPage";
import GenrePage from "../GenrePage/GenrePage";
import GenreMoviesPage from "../GenrePage/GenreMoviesPage/GenreMoviesPage";
import MoviePage from "../MoviePage/MoviePage";
import MainScreenBg from "./MainScreenBg";
import "./main-screen.css";

const MainScreen = () => {
  const [pageStatus, setPageStatus] = useState(`${history.location.pathname}`);
  const [logoSize, setLogoSize] = useState(
    `${
      history.location.pathname.includes("/movie")
        ? "extra-small"
        : history.location.pathname === "/"
        ? "large"
        : "small"
    }`
  );
  const [logoContent, setLogoContent] = useState(
    `${
      history.location.pathname.includes("/movie") ? "back-arrow" : "logotype"
    }`
  );

  useEffect(() => {
    
    history.listen((location, action) => {
      setPageStatus(location.pathname);
      setLogoSize(
        location.pathname.includes("/movie")
          ? "extra-small"
          : location.pathname === "/"
          ? "large"
          : "small"
      );
      setLogoContent(
        location.pathname.includes("/movie") ? "back-arrow" : "logotype"
      );
    });
  }, []);

  return (
    <div className="main-screen">
      <Router history={history}>
        <NavBar pageStatus={pageStatus} />
        <Link
          to={logoContent === "back-arrow" ? history.location.pathname : "/"}
          onClick={logoContent === "back-arrow" ? history.goBack : null}
        >
          <Logo contentShape={logoContent} size={logoSize} />
        </Link>
        <Route path="/" exact component={LandingPage} />
        <Route path="/now-playing" exact component={NowPlayingPage} />
        <Route path="/top-rated" exact component={TopRatedPage} />
        <Route path="/popular" exact component={PopularPage} />
        <Route path="/genres" exact component={GenrePage} />
        <Route path="/genres/:id" exact component={GenreMoviesPage} />
        <Route path="/movie/:id" exact component={MoviePage} />
      </Router>
      <MainScreenBg pageStatus={pageStatus} />
    </div>
  );
};

export default MainScreen;
