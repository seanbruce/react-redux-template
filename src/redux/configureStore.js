import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { firstSaga } from "./actionsCreators";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [logger, sagaMiddleware];
  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewaresEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const persistedToken = {
    token: "persistedToken"
  };
  const store = createStore(rootReducer, persistedToken, composedEnhancers);
  console.log(store.getState());
  sagaMiddleware.run(firstSaga);

  return store;
}
