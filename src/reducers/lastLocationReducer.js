export default (state = "", action) => {
  switch (action.type) {
    case "SAVE_LAST_LOCATION":
      return action.payload;
    default:
      return state;
  }
};
