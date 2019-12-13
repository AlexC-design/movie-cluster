export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_GENRE_IMAGES":
        return action.payload;
      default:
        return state;
    }
  };
  