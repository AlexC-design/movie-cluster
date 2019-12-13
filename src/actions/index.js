import axios from "../axios";

export const fetchConfig = () => async dispatch => {
  const response = await axios.get(`/configuration`);
  console.log("fetching config");

  dispatch({
    type: "FETCH_CONFIG",
    payload: response.data
  });
};

export const fetchPage = (page, listType, id) => async dispatch => {
  var response = {};
  if (id === undefined) {
    response = await axios.get(`/movie/${listType}`, {
      params: { page }
    });

    console.log(`fetching page ${page} from ${listType}`);
  } else {
    response = await axios.get(`/discover/movie`, {
      params: { page, with_genres: `${id}` }
    });
    console.log(`fetching page ${page} from genre id-${id}`);
  }

  dispatch({
    type: "FETCH_PAGE",
    payload: response.data
  });
};

export const fetchGenreMovies = id => async dispatch => {
  const response = await axios.get(`/discover/movie`, {
    params: { with_genres: `${id}` }
  });
  console.log(`fetching genre movies - id=${id}`);

  dispatch({
    type: "FETCH_GENRE_MOVIES",
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

export const fetchMovieDetails = id => async dispatch => {
  const response = await axios.get(`/movie/${id}`);
  console.log(`fetching details for movie id-${id}`);

  dispatch({
    type: "FETCH_MOVIE_DETAILS",
    payload: response.data
  });
};

export const fetchMovieImages = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/images`);
  console.log(`fetching images for movie id-${id}`);

  dispatch({
    type: "FETCH_MOVIE_IMAGES",
    payload: response.data
  });
};

export const clearMovieImages = () => dispatch => {
  console.log(`clearing movie images`);

  dispatch({
    type: "FETCH_MOVIE_IMAGES",
    payload: {}
  });
};

export const fetchMovieVideos = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/videos`);
  console.log(`fetching movies for movie id-${id}`);

  dispatch({
    type: "FETCH_MOVIE_VIDEOS",
    payload: response.data
  });
};

export const fetchMovieCredits = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/credits`);
  console.log(`fetching credits for movie id-${id}`);

  dispatch({
    type: "FETCH_MOVIE_CREDITS",
    payload: response.data
  });
};

export const fetchImagesFromGenre = idList => dispatch => {
  var genresImages = {};

  idList.map(async (id, index) => {
    const response = await axios.get(`/discover/movie`, {
      params: { with_genres: `${id}` }
    });
    console.log(`fetching images from genre id-${id}`);

    const movies = response.data.results;
    var movieImages = [];

    for (let i = 0; i < 5; i++) {
      movieImages.push(movies[i].poster_path);
    }

    genresImages[id] = movieImages;
  });

  dispatch({
    type: "FETCH_GENRE_IMAGES",
    payload: genresImages
  });
};
