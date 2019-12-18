export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_MOVIE_VIDEOS":
        return action.payload;
      default:
        return state;
    }
  };
  