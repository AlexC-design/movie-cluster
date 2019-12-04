export default (state = "", action) => {
  console.log(action.type);
  switch (action.type) {
    case "GET_CURRENT_PATH":
      return action.payload;
    default:
      return state;
  }
};
