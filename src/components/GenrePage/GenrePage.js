import React, { useEffect } from "react";
import SimpleBar from "simplebar-react";

import { connect } from "react-redux";
import GenreCard from "./GenreCard/GenreCard";
import { fetchGenreList, fetchPage, fetchImagesFromGenre } from "../../actions";
import "./css/genre-page.css";

const GenrePage = ({
  fetchGenreList,
  genres,
  fetchImagesFromGenre,
  genresImages
}) => {
  useEffect(() => {
    fetchGenreList();
    fetchImagesFromGenre();
  }, []);

  if (genres) {
    return (
      <SimpleBar
        className="simplebar-component"
        style={{ height: "100vh", autoHide: false }}
      >
        <div className="genre-page-container">
          <h1 className="genres-title">Genres</h1>
          <div className="genre-cards-container">
            {genres.map((genre, _) => {
              return (
                <GenreCard
                  images={genresImages[genre.id]}
                  genre={genre}
                  key={genres.id}
                />
              );
            })}
          </div>
        </div>
      </SimpleBar>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = state => {
  return {
    genres: state.genres,
    genresImages: state.genresImages
  };
};

export default connect(mapStateToProps, {
  fetchGenreList,
  fetchPage,
  fetchImagesFromGenre
})(GenrePage);
