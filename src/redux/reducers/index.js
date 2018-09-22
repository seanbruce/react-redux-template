import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import articlesReducer from "./articlesReducer";
import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
  articles: articlesReducer,
  form: formReducer,
  token: tokenReducer
});

export default rootReducer;
