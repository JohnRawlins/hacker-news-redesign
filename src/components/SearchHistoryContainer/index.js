import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import SearchTerm from "../SearchTerm";
import "./styles.scss";

const SearchHistoryContainer = ({ userInput }) => {
  const SEARCH_HISTORY_VISIBLE_LIMIT = 8;
  const { searchHistory, isSearchFormSubmitted } = useSelector(
    (state) => state,
    shallowEqual
  );

  const findMatchingSearchTerms = (searchFieldInput) => {
    const userInput = searchFieldInput.toLowerCase();
    const matchingSearchTerms = searchHistory.filter((searchTerm) => {
      return searchTerm.includes(userInput);
    });
    return matchingSearchTerms;
  };

  const createSearchHistoryList = (searchHistory, searchHistoryLimit) => {
    if (searchHistory.length > searchHistoryLimit) {
      searchHistory = searchHistory.slice(0, searchHistoryLimit);
    }
    return searchHistory.map((searchTerm, index) => {
      return <SearchTerm key={index.toString()} searchTerm={searchTerm} />;
    });
  };

  const searchHistoryList = createSearchHistoryList(
    findMatchingSearchTerms(userInput),
    SEARCH_HISTORY_VISIBLE_LIMIT
  );

  if (userInput === "" || searchHistoryList < 1 || isSearchFormSubmitted) {
    return null;
  } else {
    return <ul className="search-history-container">{searchHistoryList}</ul>;
  }
};

export default SearchHistoryContainer;
