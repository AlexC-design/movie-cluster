import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Link } from "react-router-dom";
import history from "../../history";
import { saveLastLocation } from "../../actions";

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
import SearchPage from "../SearchPage/SearchPage";
import SearchResultsPage from "../SearchPage/SearchResultsPage";

const MainScreen = ({ lastLocation, saveLastLocation }) => {
  const [pageStatus, setPageStatus] = useState(`${window.location.hash}`);
  const [logoSize, setLogoSize] = useState(
    `${
      window.location.hash.includes("#/movie")
        ? "extra-small"
        : window.location.hash === "#/"
        ? "large"
        : "small"
    }`
  );
  const [logoContent, setLogoContent] = useState(
    `${window.location.hash.includes("#/movie") ? "back-arrow" : "logotype"}`
  );

  useEffect(() => {
    history.listen((location, _) => {
      if (!location.hash.includes("#/movie")) saveLastLocation(location.hash);

      setPageStatus(location.hash);

      setLogoSize(
        location.hash.includes("#/movie")
          ? "extra-small"
          : location.hash === "#/"
          ? "large"
          : "small"
      );

      setLogoContent(
        location.hash.includes("#/movie") ? "back-arrow" : "logotype"
      );
    });
  }, []);

  console.log(lastLocation);

  return (
    <div className="main-screen">
      <HashRouter basename="/">
        <NavBar pageStatus={pageStatus} />
        <Link
          to={
            logoContent === "back-arrow"
              ? `${lastLocation.replace("#", "")}`
              : "/"
          }
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
        <Route path="/search" exact component={SearchPage} />
        <Route path="/search/:id" exact component={SearchResultsPage} />
      </HashRouter>
      <MainScreenBg pageStatus={pageStatus} />
    </div>
  );
};

const mapStateToProps = ({ lastLocation }) => {
  return { lastLocation };
};

export default connect(mapStateToProps, { saveLastLocation })(MainScreen);
