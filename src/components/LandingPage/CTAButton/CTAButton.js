import React from "react";
import { Link } from "react-router-dom";
import "./cta-button.css";

const CTAButton = () => {
  return (
    <Link to="/now-playing" className="cta-button">
      GET STARTED
    </Link>
  );
};

export default CTAButton;
