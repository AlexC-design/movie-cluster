import React from "react";
import "./css/landing-page.css";
import CTAButton from "./CTAButton/CTAButton";
import Slogan from "./Slogan/Slogan";

const LandingPage = props => {
  return (
    <div className="landing-page-container">
      <Slogan />
      <CTAButton />
    </div>
  );
};

export default LandingPage;
