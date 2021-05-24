import axios from "axios";
export const ADD_TERM_TO_SEARCH_HISTORY = "ADD_TERM_TO_SEARCH_HISTORY";
export const SET_SEARCH_FORM_SUBMISSION = "SET_SEARCH_FORM_SUBMISSION";
export const SEARCH_FOR_STORIES = "SEARCH_FOR_STORIES";
export const SET_SEARCH_FIELD_INPUT = "SET_SEARCH_FIELD_INPUT";

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

export const searchForStories = (userQuery) => {
  return async (dispatch) => {
    try {
      const storySearchResponse = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${userQuery}&tags=story`
      );
      const {
        data: { hits, query },
      } = storySearchResponse;

      if (hits.length > 0) {
        dispatch({
          type: SEARCH_FOR_STORIES,
          payload: { ...storySearchResponse.data, found: true },
        });
      } else {
        dispatch({
          type: SEARCH_FOR_STORIES,
          payload: {
            ...storySearchResponse.data,
            found: false,
            query,
            errorMessage: `No Stories Matching  `,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: SEARCH_FOR_STORIES,
        payload: { found: false, errorMessage: "Unable To Process Request" },
      });
    }
  };
};

export const setSearchFieldInput = (searchTerm) => {
  return {
    type: SET_SEARCH_FIELD_INPUT,
    payload: searchTerm,
  };
};
