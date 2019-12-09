import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GenreCard from "./GenreCard/GenreCard";
import { fetchGenreList, fetchPage } from "../../actions";
import "./css/genre-page.css";

const GenrePage = ({ fetchGenreList, fetchPage, genres }) => {
  useEffect(() => {
    fetchGenreList();

    // if (genres.length) fetchPage(1, "genres", genres[0].id);
  }, [genres.length]);

  if (genres) {
    return (
      <div className="genre-cards-container">
        {genres.map((genre, _) => {
          return <GenreCard genre={genre} />;
        })}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = state => {
  return { genres: state.genres };
};

export default connect(mapStateToProps, {
  fetchGenreList,
  fetchPage
})(GenrePage);
