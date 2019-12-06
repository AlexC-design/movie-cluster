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

// export const fetchGenreList

export const getCurrentPath = history => {
  console.log("getting path");

  return {
    type: "GET_CURRENT_PATH",
    payload: history.location.pathname
  };
};
