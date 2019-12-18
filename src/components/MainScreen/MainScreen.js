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
import TestPage from "../TestPage/TestPage";
import GenreMoviesPage from "../GenrePage/GenreMoviesPage/GenreMoviesPage";
import MoviePage from "../MoviePage/MoviePage";
import MainScreenBg from "./MainScreenBg";
import "./main-screen.css";
import SearchPage from "../SearchPage/SearchPage";
import SearchResultsPage from "../SearchPage/SearchResultsPage";

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
  const [lastLocation, setLastLocation] = useState("/");

  useEffect(() => {
    history.listen((location, _) => {
      setPageStatus(location.pathname);
    });

    if (!history.location.pathname.includes("movie"))
      setLastLocation(history.location.pathname);

    setLogoSize(
      history.location.pathname.includes("/movie")
        ? "extra-small"
        : history.location.pathname === "/"
        ? "large"
        : "small"
    );

    setLogoContent(
      history.location.pathname.includes("/movie") ? "back-arrow" : "logotype"
    );
  });

  return (
    <div className="main-screen">
      <Router history={history}>
        <NavBar pageStatus={pageStatus} />
        <Link to={logoContent === "back-arrow" ? lastLocation : "/"}>
          <Logo contentShape={logoContent} size={logoSize} />
        </Link>
        <Route path="/" exact component={LandingPage} />
        <Route path="/now-playing" exact component={NowPlayingPage} />
        <Route path="/top-rated" exact component={TopRatedPage} />
        <Route path="/popular" exact component={PopularPage} />
        <Route path="/genres" exact component={GenrePage} />
        <Route path="/genres/:id" exact component={GenreMoviesPage} />
        <Route path="/movie/:id" exact component={MoviePage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/search/:id" exact component={SearchResultsPage} />
        <Route path="/test" exact component={TestPage} />
      </Router>
      <MainScreenBg pageStatus={pageStatus} />
    </div>
  );
};

export default MainScreen;
