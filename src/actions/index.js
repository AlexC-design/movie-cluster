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

export const searchMovies = (page, query, callback) => async dispatch => {
  const response = await axios.get(`/search/movie`, {
    params: { page, query }
  });
  console.log(`searching movies for ${query}`);

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

export const fetchSimilarMovies = id => async dispatch => {
  const response = await axios.get(`/movie/${id}/similar`);
  console.log(`fetching similar movies for movie id-${id}`);

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

export const fetchImagesFromGenre = () => async dispatch => {
  const genreResponse = await axios.get(`/genre/movie/list`);
  const idList = genreResponse.data.genres.map(genre => genre.id);

  var genresImages = {};

  await Promise.all(
    idList.map(async id => {
      const response = await axios.get(`/discover/movie`, {
        params: { with_genres: `${id}` }
      });
      console.log(`fetching images from genre id-${id}`);

      const movies = response.data.results;

      id == 99 ? console.log(response.data.results) : console.log("");

      genresImages[id] = movies.map((movie, index) => {
        if (movie.poster_path) {
          return movie.poster_path;
        } else {
          return movies[index - 1].poster_path;
        }
      });

      id == 99 ? console.log(genresImages[id]) : console.log("");
    })
  );

  // idList.map(async (id, _) => {
  //   const response = await axios.get(`/discover/movie`, {
  //     params: { with_genres: `${id}` }
  //   });
  //   console.log(`fetching images from genre id-${id}`);

  //   const movies = response.data.results;

  //   genresImages[id] = movies.slice(0, 5).map(movie => movie.poster_path);
  // });

  dispatch({
    type: "FETCH_GENRE_IMAGES",
    payload: genresImages
  });
};
