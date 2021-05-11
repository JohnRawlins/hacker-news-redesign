import { ADD_TERM_TO_SEARCH_HISTORY } from "../actions/search";

const initialState = {
  searchHistory: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TERM_TO_SEARCH_HISTORY: {
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
