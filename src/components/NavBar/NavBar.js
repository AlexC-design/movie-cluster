import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentPath } from "../../actions";
import "./navbar.css";

const NavBar = props => {
  const navBarStatus = props.pageStatus === "/" ? "hidden" : "revealed";

  const pathCheck = path => (props.pageStatus === path ? "active" : "inactive");

  return (
    <div className={`navbar-container ${navBarStatus}`}>
      <ul>
        <Link
          to="/now-playing"
          className={`navbar-link ${pathCheck("/now-playing")}`}
        >
          Now Playing
        </Link>
        <Link
          to="/top-rated"
          className={`navbar-link ${pathCheck("/top-rated")}`}
        >
          Top Rated
        </Link>
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
