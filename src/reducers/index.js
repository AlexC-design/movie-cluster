import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import genreListReducer from "./genreListReducer";
import genreMoviesReducer from "./genreMoviesReducer";
import movieImagesReducer from "./movieImagesReducer";
import configurationReducer from "./configurationReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import movieVideosReducer from "./movieVideosReducer";
import movieCreditsReducer from "./movieCreditsReducer";
import similarMoviesReducer from "./similarMoviesReducer";
import genreImagesReducer from "./genreImagesReducer";
import lastLocationReducer from "./lastLocationReducer";

export default combineReducers({
  currentPage: pageReducer,
  genres: genreListReducer,
  lastLocation: lastLocationReducer,
  genreMovies: genreMoviesReducer,
  genresImages: genreImagesReducer,
  movieImages: movieImagesReducer,
  movieVideos: movieVideosReducer,
  movieDetails: movieDetailsReducer,
  movieCredits: movieCreditsReducer,
  similarMovies: similarMoviesReducer,
  config: configurationReducer
});
