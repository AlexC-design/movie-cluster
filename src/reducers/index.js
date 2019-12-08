import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import currentPathReducer from "./currentPathReducer";
import imagesReducer from "./imagesReducer";
import genreListReducer from "./genreListReducer";
import genreMoviesReducer from "./genreMoviesReducer";
import configurationReducer from "./configurationReducer";

export default combineReducers({
  currentPage: pageReducer,
  currentPath: currentPathReducer,
  images: imagesReducer,
  genres: genreListReducer,
  genreMovies: genreMoviesReducer,
  config: configurationReducer
});
