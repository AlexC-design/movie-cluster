export default (state = {}, action) => {
    switch (action.type) {
      case "FETCH_SIMILAR_MOVIES":
        return action.payload;
      default:
        return state;
    }
  };
  