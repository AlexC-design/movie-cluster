import { combineReducers } from "redux";
import nowPlayingReducer from "./nowPlayingReducer";
import topRatedReducer from "./topRatedReducer";
import popularReducer from "./popularReducer";
import currentPathReducer from "./currentPathReducer";
import imagesReducer from "./imagesReducer";
import configurationReducer from "./configurationReducer";

export default combineReducers({
  nowPlaying: nowPlayingReducer,
  topRated: topRatedReducer,
  popular: popularReducer,
  currentPath: currentPathReducer,
  images: imagesReducer,
  config: configurationReducer
});
