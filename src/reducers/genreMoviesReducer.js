export default (state = {}, action) => {
    switch (action.type) {
      case "FETCH_GENRE_MOVIES":
        return action.payload;
      default:
        return state;
    }
  };
  