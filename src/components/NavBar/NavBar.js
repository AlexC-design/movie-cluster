import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.css";
import { MobileMenu } from "./MobileMenu/MobileMenu";

const NavBar = props => {
  const [mobileMenuState, setMobileMenuState] = useState("closed");

  const showHideMenu = () => {
    console.log("ENTERED");
    mobileMenuState === "closed"
      ? setMobileMenuState("open")
      : setMobileMenuState("closed");
  };

  useEffect(() => {
    setMobileMenuState("closed");
  }, [props.pageStatus]);

  const navBarStatus =
    props.pageStatus === "/" || props.pageStatus.includes("/movie")
      ? "hidden"
      : "revealed";

  const pathCheck = path => (props.pageStatus === path ? "active" : "inactive");

  return (
    <div className={`navbar-container ${navBarStatus}`}>
      <ul className={`${mobileMenuState}`}>
        <MobileMenu
          menuState={mobileMenuState}
          showHideMenu={showHideMenu}
          menuButtonState={navBarStatus}
        />
        <Link
          to="/now-playing"
          className={`navbar-link ${pathCheck(
            "/now-playing"
          )} ${mobileMenuState}`}
        >
          Now Playing
        </Link>
        <Link
          to="/top-rated"
          className={`navbar-link ${pathCheck(
            "/top-rated"
          )} ${mobileMenuState}`}
        >
          Top Rated
        </Link>

        <Link
          to="/popular"
          className={`navbar-link ${pathCheck("/popular")} ${mobileMenuState}`}
        >
          Popular
        </Link>
        <Link
          to="/genres"
          className={`navbar-link ${pathCheck("/genres")} ${mobileMenuState}`}
        >
          Genres
        </Link>
        <Link
          to="/search"
          className={`navbar-link ${pathCheck("/search")} ${mobileMenuState}`}
        >
          Search
        </Link>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentPath: state.currentPath };
};

export default connect(mapStateToProps)(NavBar);
