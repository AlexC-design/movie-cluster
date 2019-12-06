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

        <Link to="/popular" className={`navbar-link ${pathCheck("/popular")}`}>
          Popular
        </Link>
        <Link to="/genre" className={`navbar-link ${pathCheck("/genre")}`}>
          Genre
        </Link>
        <Link to="/search" className={`navbar-link ${pathCheck("/search")}`}>
          Search
        </Link>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentPath: state.currentPath };
};

export default connect(mapStateToProps, { getCurrentPath })(NavBar);
