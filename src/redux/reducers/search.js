import { ADD_TERM_TO_SEARCH_HISTORY } from "../actions/search";
import { SET_SEARCH_FORM_SUBMISSION } from "../actions/search";
import { SEARCH_FOR_STORIES } from "../actions/search";
import { SET_SEARCH_FIELD_INPUT } from "../actions/search";
import { SEARCH_START } from "../actions/search";
import { SEARCH_END } from "../actions/search";

const initialState = {
  searchHistory: [],
  searchResults: {},
  searchFieldInput: "",
  isSearchFormSubmitted: false,
  isLoading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TERM_TO_SEARCH_HISTORY: {
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    }

    case SET_SEARCH_FORM_SUBMISSION: {
      return {
        ...state,
        isSearchFormSubmitted: action.payload,
      };
    }

    case SEARCH_FOR_STORIES: {
      return {
        ...state,
        searchResults: action.payload,
      };
    }

    case SET_SEARCH_FIELD_INPUT: {
      return {
        ...state,
        searchFieldInput: action.payload,
      };
    }

    case SEARCH_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SEARCH_END: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
