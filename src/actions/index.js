import axios from "../axios";

export const fetchNowPlaying = () => async dispatch => {
  const response = await axios.get("/movie/now_playing");

  dispatch({
    type: "FETCH_NOW_PLAYING",
    payload: response.data
  });
};
