import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import searchLogo from "../../assets/images/search-logo.svg";
import "./css/search-page.css";
import { searchMovies } from "../../actions";
import history from "../../history";

const SearchPage = ({ searchMovies }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {});

  const submitFunction = event => {
    event.preventDefault();
    searchMovies(1, term);
    history.push(`/search/${term}`);
  };

  return (
    <div className="search-page-container">
      <div className={`search-section-container`}>
        <img className="search-logo" src={searchLogo} alt="search logo" />
        <div className="search-bar-container">
          <form onSubmit={submitFunction}>
            <input
              onChange={e => setTerm(e.target.value)}
              className="search-bar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { searchMovies })(SearchPage);
