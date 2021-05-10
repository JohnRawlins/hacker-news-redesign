export const ADD_TERM_TO_SEARCH_HISTORY = "ADD_TERM_TO_SEARCH_HISTORY";

export const addTermToSearchHistory = (searchTerm) => {
  return {
    type: ADD_TERM_TO_SEARCH_HISTORY,
    payload: searchTerm,
  };
};
