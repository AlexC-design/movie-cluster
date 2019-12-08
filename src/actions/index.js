import axios from "../axios";

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

export const fetchPage = (page, listType) => async dispatch => {
  const response = await axios.get(`/movie/${listType}`, {
    params: { page }
  });
  console.log("fetching page");
  dispatch({
    type: "FETCH_PAGE",
    payload: response.data
  });
};

export const fetchGenreMovies = id => async dispatch => {
  const response = await axios.get(`/discover/movie`, {
    params: { with_genres: `${id}` }
  });
  console.log("fetching images");

  dispatch({
    type: "FETCH_IMAGES",
    payload: response.data
  });
};

export const fetchGenreList = () => async dispatch => {
  const response = await axios.get(`/genre/movie/list`);
  console.log("fetching genre list");

  dispatch({
    type: "FETCH_GENRE_LIST",
    payload: response.data.genres
  });
};

export const getCurrentPath = history => {
  console.log("getting path");

  return {
    type: "GET_CURRENT_PATH",
    payload: history.location.pathname
  };
};
