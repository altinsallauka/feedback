import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const initialState = {};
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['FeedbackFormReducer', 'ModalReducer'],
};
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default store;
