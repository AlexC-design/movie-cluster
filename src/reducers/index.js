import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import genreListReducer from "./genreListReducer";
import genreMoviesReducer from "./genreMoviesReducer";
import movieImagesReducer from "./movieImagesReducer";
import configurationReducer from "./configurationReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import movieVideosReducer from "./movieVideosReducer";
import movieCreditsReducer from "./movieCreditsReducer";
import genreImagesReducer from "./genreImagesReducer";

export default combineReducers({
  currentPage: pageReducer,
  genres: genreListReducer,
  genreMovies: genreMoviesReducer,
  genresImages: genreImagesReducer,
  movieImages: movieImagesReducer,
  movieVideos: movieVideosReducer,
  movieDetails: movieDetailsReducer,
  movieCredits: movieCreditsReducer,
  config: configurationReducer
});
