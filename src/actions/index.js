import axios from "../axios";

export const fetchConfig = () => async dispatch => {
  const response = await axios.get(`/configuration`);

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
  } else {
    response = await axios.get(`/discover/movie`, {
      params: { page, with_genres: `${id}` }
    });
  }

  dispatch({
    type: "FETCH_PAGE",
    payload: response.data
  });
};

export const saveLastLocation = path => dispatch => {
  dispatch({
    type: "SAVE_LAST_LOCATION",
    payload: path
  });
};

export const searchMovies = (page, query, callback) => async dispatch => {
  const response = await axios.get(`/search/movie`, {
    params: { page, query }
  });

  dispatch({
    type: "FETCH_PAGE",
    payload: response.data
  });

  if (callback) {
    callback(response.data.results);
  }
};

export const fetchGenreMovies = id => async dispatch => {
  const response = await axios.get(`/discover/movie`, {
    params: { with_genres: `${id}` }
  });

  dispatch({
    type: "FETCH_GENRE_MOVIES",
    payload: response.data
  });
};

export const fetchGenreList = () => async dispatch => {
  const response = await axios.get(`/genre/movie/list`);

  dispatch({
    type: "FETCH_GENRE_LIST",
    payload: response.data.genres
  });
};

export const fetchMovieDetails = id => async dispatch => {
  const response = await axios.get(`/movie/${id}`);

  dispatch({
    type: "FETCH_MOVIE_DETAILS",
    payload: response.data
  });
};

export const fetchMovieImages = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/images`);

  dispatch({
    type: "FETCH_MOVIE_IMAGES",
    payload: response.data
  });
};

export const fetchSimilarMovies = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/similar`);

  dispatch({
    type: "FETCH_SIMILAR_MOVIES",
    payload: response.data
  });
};

export const clearMovieImages = () => dispatch => {
  dispatch({
    type: "FETCH_MOVIE_IMAGES",
    payload: {}
  });
};

export const clearPage = () => dispatch => {
  dispatch({
    type: "FETCH_PAGE",
    payload: {}
  });
};

export const clearMovieCredits = () => dispatch => {
  dispatch({
    type: "FETCH_MOVIE_CREDITS",
    payload: {}
  });
};

export const clearMovieVideos = () => dispatch => {
  dispatch({
    type: "FETCH_MOVIE_VIDEOS",
    payload: []
  });
};

export const fetchMovieVideos = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/videos`);

  var results = [];

  response.data.results.forEach(video => {
    if (
      video.site === "YouTube" &&
      (video.type === "Trailer" || video.type === "Teaser")
    ) {
      results.push(video);
    }
  });

  dispatch({
    type: "FETCH_MOVIE_VIDEOS",
    payload: results
  });
};

export const fetchMovieCredits = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/credits`);

  dispatch({
    type: "FETCH_MOVIE_CREDITS",
    payload: response.data
  });
};

export const fetchImagesFromGenre = () => async dispatch => {
  const genreResponse = await axios.get(`/genre/movie/list`);
  const idList = genreResponse.data.genres.map(genre => genre.id);

  var genresImages = {};

  await Promise.all(
    idList.map(async id => {
      const response = await axios.get(`/discover/movie`, {
        params: { with_genres: `${id}` }
      });

      const movies = response.data.results;

      genresImages[id] = movies
        .map((movie, _) => {
          if (movie.poster_path) {
            return movie.poster_path;
          }
        })
        .filter((image, index) => image !== undefined);
    })
  );

  // idList.map(async (id, _) => {
  //   const response = await axios.get(`/discover/movie`, {
  //     params: { with_genres: `${id}` }
  //   });
  //

  //   const movies = response.data.results;

  //   genresImages[id] = movies.slice(0, 5).map(movie => movie.poster_path);
  // });

  dispatch({
    type: "FETCH_GENRE_IMAGES",
    payload: genresImages
  });
};
