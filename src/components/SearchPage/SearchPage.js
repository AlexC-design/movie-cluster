import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import searchLogo from "../../assets/images/search-logo.svg";
import "./css/search-page.css";
import { searchMovies } from "../../actions";
import history from "../../history";

const SearchPage = ({ searchMovies, movieList }) => {
  const [term, setTerm] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {});

  const submitFunction = event => {
    event.preventDefault();
    setSearched(true);
    searchMovies(1, term, movies => {
      movies.length && history.push(`/search/${term}`);
    });
  };

  return (
    <div className="search-page-container">
      <div className="search-section-container">
        <img className="search-logo" src={searchLogo} alt="search logo" />
        <div className="search-bar-container">
          <form onSubmit={submitFunction}>
            <input
              onChange={e => setTerm(e.target.value)}
              className="search-bar"
            />
          </form>
        </div>
        {searched && movieList && !movieList.length && (
          <div className="not-found">No movies found, try a different term</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ currentPage }) => {
  return { movieList: currentPage.results };
};

export default connect(mapStateToProps, { searchMovies })(SearchPage);
