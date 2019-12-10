import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import genreListReducer from "./genreListReducer";
import genreMoviesReducer from "./genreMoviesReducer";
import movieImagesReducer from "./movieImagesReducer";
import configurationReducer from "./configurationReducer";
import movieDetailsReducer from "./movieDetailsReducer";

export default combineReducers({
  currentPage: pageReducer,
  genres: genreListReducer,
  genreMovies: genreMoviesReducer,
  movieImages: movieImagesReducer,
  movieDetails: movieDetailsReducer,
  config: configurationReducer
});
