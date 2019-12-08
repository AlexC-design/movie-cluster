import React, { useEffect } from "react";
import { connect } from "react-redux";
import GenreCard from "./GenreCard/GenreCard";
import { fetchGenreList, fetchGenreMovies } from "../../actions";
import "./css/genre-page.css";

const GenrePage = ({ fetchGenreList, fetchGenreMovies, genres }) => {
  const genreImages = {};
  useEffect(() => {
    fetchGenreList();

    if (genres.length) genreImages.first = fetchGenreMovies(genres[0].id);
    console.log({ genreImages });
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

export default connect(mapStateToProps, { fetchGenreList, fetchGenreMovies })(
  GenrePage
);
