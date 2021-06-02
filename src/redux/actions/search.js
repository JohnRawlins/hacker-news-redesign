import axios from "axios";
export const ADD_TERM_TO_SEARCH_HISTORY = "ADD_TERM_TO_SEARCH_HISTORY";
export const SET_SEARCH_FORM_SUBMISSION = "SET_SEARCH_FORM_SUBMISSION";
export const SEARCH_FOR_STORIES = "SEARCH_FOR_STORIES";
export const SET_SEARCH_FIELD_INPUT = "SET_SEARCH_FIELD_INPUT";
export const SEARCH_START = "SEARCH_START";
export const SEARCH_END = "SEARCH_END";

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

export const searchStart = () => {
  return {
    type: SEARCH_START,
  };
};

export const searchEnd = () => {
  return {
    type: SEARCH_END,
  };
};

const storyMatchesFound = (storySearchResponse) => {
  return {
    type: SEARCH_FOR_STORIES,
    payload: {
      ...storySearchResponse.data,
      found: true,
    },
  };
};

const noStoryMatchesFound = (storySearchResponse, query) => {
  return {
    type: SEARCH_FOR_STORIES,
    payload: {
      ...storySearchResponse.data,
      found: false,
      query,
      errorMessage: `No Stories Matching  `,
    },
  };
};

const searchError = () => {
  return {
    type: SEARCH_FOR_STORIES,
    payload: { found: false, errorMessage: "Unable To Process Request" },
  };
};

export const searchForStories = (userSearchTerm, pageNum) => {
  window.scrollTo(0, 0);
  return async (dispatch) => {
    try {
      dispatch(searchStart());
      const tags = "story";
      const searchParams = new URLSearchParams();
      searchParams.set("query", userSearchTerm);
      searchParams.set("tags", tags);
      if (!pageNum) {
        searchParams.set("page", 1);
      } else {
        searchParams.set("page", pageNum);
      }
      const queryString = searchParams.toString();
      const storySearchResponse = await axios.get(
        `http://hn.algolia.com/api/v1/search?${queryString}`
      );
      const {
        data: { hits, query },
      } = storySearchResponse;

      if (hits.length > 0) {
        dispatch(storyMatchesFound(storySearchResponse));
      } else {
        dispatch(noStoryMatchesFound(storySearchResponse, query));
      }
      dispatch(searchEnd());
    } catch (error) {
      dispatch(searchError());
      dispatch(searchEnd());
    }
  };
};

export const setSearchFieldInput = (searchTerm) => {
  return {
    type: SET_SEARCH_FIELD_INPUT,
    payload: searchTerm,
  };
};
