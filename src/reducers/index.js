import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import currentPathReducer from "./currentPathReducer";
import imagesReducer from "./imagesReducer";
import configurationReducer from "./configurationReducer";

export default combineReducers({
  currentPage: pageReducer,
  currentPath: currentPathReducer,
  images: imagesReducer,
  config: configurationReducer
});
