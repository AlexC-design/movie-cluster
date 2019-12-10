import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.css";

const NavBar = props => {
  const navBarStatus =
    props.pageStatus === "/" || props.pageStatus.includes("/movie")
      ? "hidden"
      : "revealed";

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
        <Link to="/genres" className={`navbar-link ${pathCheck("/genres")}`}>
          Genres
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

export default connect(mapStateToProps)(NavBar);
