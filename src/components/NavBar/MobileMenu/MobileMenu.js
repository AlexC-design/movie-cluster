import React from "react";
import downArrow from "../../../assets/images/down-arrow.svg";
import "./mobile-menu.css";

export const MobileMenu = ({ showHideMenu, menuState }) => {
  return (
    <img
      onClick={showHideMenu}
      className={`menu-button ${menuState}`}
      src={downArrow}
    />
  );
};
