export default (state = {}, action) => {
    switch (action.type) {
      case "FETCH_CONFIG":
        return action.payload;
      default:
        return state;
    }
  };
  