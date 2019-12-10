import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../actions";

import SimpleBar from "simplebar-react";
import HeroSection from "./MoviePageSections/HeroSection/HeroSection";
import DetailsSection from "./MoviePageSections/DetailsSection/DetailsSection";

import "./css/movie-page.css";

const MoviePage = ({ match, fetchMovieDetails }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchMovieDetails(id);
  });

  return (
    <SimpleBar
      className="simplebar-component"
      style={{ height: "100vh", autoHide: false }}
    >
      <HeroSection id={id} />
      <DetailsSection />
    </SimpleBar>
  );
};

export default connect(null, { fetchMovieDetails })(MoviePage);
