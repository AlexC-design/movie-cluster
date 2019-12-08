export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_GENRE_LIST":
      return action.payload;
    default:
      return state;
  }
};
