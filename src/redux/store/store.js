import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import searchHistoryReducer from "../reducers/searchHistory";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  searchHistoryReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
