export default (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_IMAGES":
      return action.payload;
    default:
      return state;
  }
};
