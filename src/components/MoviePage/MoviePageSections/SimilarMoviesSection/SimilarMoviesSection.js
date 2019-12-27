import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSimilarMovies } from "../../../../actions";
import get from "get-value";
import history from "../../../../history";

const scrollToTop = () => {
  document
    .querySelector(".similar-movies-section")
    .scrollTo({ top: 0, behavior: "smooth" });

  document
    .querySelector(".simplebar-component .simplebar-content-wrapper")
    .scrollTo({ top: 0, behavior: "smooth" });
};

const SimilarMoviesSection = ({
  fetchSimilarMovies,
  similarMoviesList,
  backdropSizes,
  movieVideos,
  baseUrl,
  id
}) => {
  useEffect(() => {
    fetchSimilarMovies(id);
  }, [movieVideos]);

  const imageUrl = backdropPath => {
    return `${baseUrl}${
      backdropSizes[backdropSizes.length - 3]
    }${backdropPath}`;
  };

  const imageStyling = backdropPath => {
    return {
      background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${imageUrl(
        backdropPath
      )})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
  };

  if (similarMoviesList) {
    return (
      <>
        <h1 className="similar-movies-title">Similar Movies </h1>
        <div className="similar-movies-container">
          <div className="similar-movies-section">
            {similarMoviesList.map((movie, _) => {
              return (
                <div
                  key={movie.id}
                  onClick={() => {
                    history.push(`/movie/${movie.id}`);
                    scrollToTop();
                  }}
                >
                  <div className="similar-movie-container">
                    <h1 className="similar-movie-title">
                      {movie.original_title}
                    </h1>
                    <div className="similar-movie-image-container">
                      <div
                        className="similar-movie-image"
                        style={imageStyling(movie.backdrop_path)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else return <div>Loading</div>;
};

const mapStateToProps = state => {
  return {
    movieVideos: state.movieVideos,
    similarMoviesList: state.similarMovies.results,
    backdropSizes: get(state, "config.images.backdrop_sizes", ""),
    baseUrl: get(state, "config.images.base_url", "")
  };
};

export default connect(mapStateToProps, {
  fetchSimilarMovies
})(SimilarMoviesSection);
