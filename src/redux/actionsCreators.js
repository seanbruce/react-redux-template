import {
  LOAD_ARTICLES_FAILURE,
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  UPDATE_TOKEN,
  REMOVE_TOKEN
} from "./actionConstants";

export const loadArticlesFailure = () => ({
  type: LOAD_ARTICLES_FAILURE
});

export const loadArticlesRequest = () => ({
  type: LOAD_ARTICLES_REQUEST
});

export const loadArticlesSuccess = () => ({
  type: LOAD_ARTICLES_SUCCESS
});

export const getToken = token => ({
  type: UPDATE_TOKEN,
  token
});

export const removeToken = () => ({
  type: REMOVE_TOKEN
});

export const firstSaga = function*() {
  console.log("Hello World");
};
