import { UPDATE_TOKEN, REMOVE_TOKEN } from "../actionConstants";

export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return action.token;
    case REMOVE_TOKEN:
      return null;
    default:
      return state;
  }
};
