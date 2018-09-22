import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE
} from "../actionConstants";

const defaultState = {
  articleList: [],
  isFetching: false,
  isError: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case LOAD_ARTICLES_SUCCESS:
      return { ...state, isFetching: false, isError: false };
    case LOAD_ARTICLES_FAILURE:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
