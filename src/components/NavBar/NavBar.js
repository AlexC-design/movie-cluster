import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentPath } from "../../actions";
import "./navbar.css";

const NavBar = props => {
  const navBarStatus = props.pageStatus === "/" ? "hidden" : "revealed";

  return (
    <div className={`navbar-container ${navBarStatus}`}>
      <ul>
        <li className="navbar-link">Now Playing</li>
        <li className="navbar-link">Top Rated</li>
        <li className="navbar-link">Popular</li>
        <li className="navbar-link">Genre</li>
        <li className="navbar-link">Search</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentPath: state.currentPath };
};

export default connect(mapStateToProps, { getCurrentPath })(NavBar);
