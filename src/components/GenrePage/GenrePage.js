import React, { useEffect } from "react";
import SimpleBar from "simplebar-react";

import { connect } from "react-redux";
import GenreCard from "./GenreCard/GenreCard";
import { fetchGenreList, fetchPage } from "../../actions";
import "./css/genre-page.css";

const GenrePage = ({ fetchGenreList, genres }) => {
  useEffect(() => {
    fetchGenreList();

    // if (genres.length) fetchPage(1, "genres", genres[0].id);
  });

  if (genres) {
    return (
      <SimpleBar
        className="simplebar-component"
        style={{ height: "100vh", autoHide: false }}
      >
        <div className="genre-cards-container">
          {genres.map((genre, _) => {
            return <GenreCard genre={genre} />;
          })}
        </div>
      </SimpleBar>
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
