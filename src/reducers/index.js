import { combineReducers } from "redux";
import nowPlayingReducer from "./nowPlayingReducer";
import currentPathReducer from "./currentPathReducer";
import imagesReducer from "./imagesReducer";
import configurationReducer from "./configurationReducer";

export default combineReducers({
  nowPlaying: nowPlayingReducer,
  currentPath: currentPathReducer,
  images: imagesReducer,
  config: configurationReducer
});
