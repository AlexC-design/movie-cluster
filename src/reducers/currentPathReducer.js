export default (state = "", action) => {
  switch (action.type) {
    case "GET_CURRENT_PATH":
      return action.payload;
    default:
      return state;
  }
};
