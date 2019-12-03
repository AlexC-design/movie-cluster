import React from "react";
import Logo from "./Logo/Logo";
import "./css/landing-page.css";
import CTAButton from "./CTAButton/CTAButton";
import Slogan from "./Slogan/Slogan";
import MovieList from "../MovieList/MovieList";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Logo contentShape="logotype" size="large" />
      <Slogan />
      <CTAButton />
      <MovieList />
    </div>
  );
};

export default LandingPage;
