import { combineReducers } from "redux";
import nowPlayingReducer from "./nowPlayingReducer";
import currentPathReducer from "./currentPathReducer";

export default combineReducers({
  nowPlaying: nowPlayingReducer,
  currentPath: currentPathReducer
});
