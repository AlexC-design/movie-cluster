import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import genreListReducer from "./genreListReducer";
import genreMoviesReducer from "./genreMoviesReducer";
import movieImagesReducer from "./movieImagesReducer";
import configurationReducer from "./configurationReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import movieVideosReducer from "./movieVideosReducer";

export default combineReducers({
  currentPage: pageReducer,
  genres: genreListReducer,
  genreMovies: genreMoviesReducer,
  movieImages: movieImagesReducer,
  movieVideos: movieVideosReducer,
  movieDetails: movieDetailsReducer,
  config: configurationReducer
});
