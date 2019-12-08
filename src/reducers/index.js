import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import currentPathReducer from "./currentPathReducer";
import imagesReducer from "./imagesReducer";
import genreListReducer from "./genreListReducer";
import configurationReducer from "./configurationReducer";

export default combineReducers({
  currentPage: pageReducer,
  currentPath: currentPathReducer,
  images: imagesReducer,
  genres: genreListReducer,
  config: configurationReducer
});
