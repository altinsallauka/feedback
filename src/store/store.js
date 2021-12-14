import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import rootReducer from "../reducers/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/saga";
// const initialState = {};

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  //   initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
