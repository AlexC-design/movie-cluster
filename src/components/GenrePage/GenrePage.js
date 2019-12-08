import React, { useEffect } from "react";
import { connect } from "react-redux";
import GenreCard from "./GenreCard/GenreCard";
import { fetchGenreList } from "../../actions";
import "./css/genre-page.css";

const GenrePage = ({ fetchGenreList, genres }) => {
  useEffect(() => {
    fetchGenreList();
    console.log(genres);
  }, [genres.length]);

  if (genres) {
    return (
      <div className="genre-cards-container">
        {genres.map((_, genre) => {
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

export default connect(mapStateToProps, { fetchGenreList })(GenrePage);
