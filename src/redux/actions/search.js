export const ADD_TERM_TO_SEARCH_HISTORY = "ADD_TERM_TO_SEARCH_HISTORY";
export const SET_SEARCH_FORM_SUBMISSION = "SET_SEARCH_FORM_SUBMISSION";

export const addTermToSearchHistory = (searchTerm) => {
  return {
    type: ADD_TERM_TO_SEARCH_HISTORY,
    payload: searchTerm,
  };
};

export const setSearchFormSubmission = (value) => {
  return {
    type: SET_SEARCH_FORM_SUBMISSION,
    payload: value,
  };
};
