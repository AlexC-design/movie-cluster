import React from "react";
import SimpleBar from "simplebar-react";
import HeroSection from "./MoviePageSections/HeroSection/HeroSection";
import "./css/movie-page.css";

const MoviePage = props => {
  return (
    <SimpleBar
      className="simplebar-component"
      style={{ height: "100vh", autoHide: false }}
    >
      {" "}
      <HeroSection id={props.match.params.id} />
    </SimpleBar>
  );
};

export default MoviePage;
