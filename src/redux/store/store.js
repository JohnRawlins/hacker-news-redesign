import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import searchHistory from "../reducers/searchHistory";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  searchHistory,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
