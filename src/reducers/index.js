import { combineReducers } from "redux";
import nowPlayingReducer from "./nowPlayingReducer";

export default combineReducers({
  nowPlaying: nowPlayingReducer
});
