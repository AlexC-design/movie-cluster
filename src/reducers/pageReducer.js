export default (state = {}, action) => {
    switch (action.type) {
      case "FETCH_PAGE":
        return action.payload;
      default:
        return state;
    }
  };
  