import axios from "../axios";

export const fetchNowPlaying = () => async dispatch => {
  const response = await axios.get("/movie/now_playing");
  console.log("fetching now playing");
  
  dispatch({
    type: "FETCH_NOW_PLAYING",
    payload: response.data
  });
};

export const fetchTopRated = () => async dispatch => {
  const response = await axios.get("/movie/top_rated");
  console.log("fetching top rated");
  
  dispatch({
    type: "FETCH_TOP_RATED",
    payload: response.data
  });
};

export const fetchPopular = () => async dispatch => {
  const response = await axios.get("/movie/popular");
  console.log("fetching popular");
  
  dispatch({
    type: "FETCH_POPULAR",
    payload: response.data
  });
};

export const fetchImages = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/images`);
  console.log("fetching images");

  dispatch({
    type: "FETCH_IMAGES",
    payload: response.data
  });
};

export const fetchConfig = () => async dispatch => {
  const response = await axios.get(`/configuration`);
  console.log("fetching config");

  dispatch({
    type: "FETCH_CONFIG",
    payload: response.data
  });
};

export const getCurrentPath = history => {
  console.log("getting path");

  return {
    type: "GET_CURRENT_PATH",
    payload: history.location.pathname
  };
};
