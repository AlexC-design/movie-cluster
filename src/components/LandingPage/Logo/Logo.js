import React from "react";
import logoCircle from "../../../assets/images/Logo/logo-circle.svg";
import logotype from "../../../assets/images/Logo/logotype.svg";
import backArrow from "../../../assets/images/Logo/back-arrow.svg";
import "./logo.css";

const Logo = ({ contentShape, size }) => {
  return (
    <div className={`logo-container ${size}`}>
      <img
        className={`${contentShape}`}
        src={contentShape === "logotype" ? logotype : backArrow}
        alt="logotype"
      />
      <img className="logo-circle" src={logoCircle} alt="logo circle" />
    </div>
  );
};

export default Logo;
