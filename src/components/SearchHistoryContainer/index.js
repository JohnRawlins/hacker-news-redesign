import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import SearchTerm from "../SearchTerm";
import "./styles.scss";

const SearchHistoryContainer = () => {
  const SEARCH_HISTORY_VISIBLE_LIMIT = 8;
  const { searchHistory, isSearchHistoryVisible, searchFieldInput } =
    useSelector((state) => state, shallowEqual);

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
    findMatchingSearchTerms(searchFieldInput),
    SEARCH_HISTORY_VISIBLE_LIMIT
  );

  if (
    searchFieldInput === "" ||
    searchHistoryList < 1 ||
    !isSearchHistoryVisible
  ) {
    return null;
  } else {
    return <ul className="search-history-container">{searchHistoryList}</ul>;
  }
};

export default SearchHistoryContainer;
