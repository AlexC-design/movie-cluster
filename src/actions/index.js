import axios from "../axios";

export const fetchNowPlaying = () => async dispatch => {
  const response = await axios.get("/movie/now_playing");

  dispatch({
    type: "FETCH_NOW_PLAYING",
    payload: response.data
  });
};

export const fetchImages = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/images`);
  console.log(response);
  dispatch({
    type: "FETCH_IMAGES",
    payload: response.data
  });
};

export const fetchConfig = () => async dispatch => {
  const response = await axios.get(`/configuration`);
  console.log(response);
  dispatch({
    type: "FETCH_CONFIG",
    payload: response.data
  });
};

export const getCurrentPath = history => {
  return {
    type: "GET_CURRENT_PATH",
    payload: history.location.pathname
  };
};

