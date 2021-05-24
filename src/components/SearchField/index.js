import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import * as searchActions from "../../redux/actions/search";
import SearchHistoryContainer from "../SearchHistoryContainer";
import searchIcon from "./assets/search-icon.svg";
import "./styles.scss";

const SearchField = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { searchHistory, isSearchFormSubmitted, searchFieldInput } =
    useSelector((state) => state, shallowEqual);

  const isComponentMounted = useRef(false);

  const isDuplicateSearchTerm = (term) => {
    return searchHistory.includes(term.toLowerCase());
  };

  const handleChange = (event) => {
    if (isSearchFormSubmitted) {
      dispatch(searchActions.setSearchFormSubmission(false));
    }
    const userInput = event.target.value;
    dispatch(searchActions.setSearchFieldInput(userInput));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchFieldInput === "") return;
    if (!isDuplicateSearchTerm(searchFieldInput)) {
      dispatch(
        searchActions.addTermToSearchHistory(searchFieldInput.toLowerCase())
      );
    }
    dispatch(searchActions.setSearchFormSubmission(true));
    dispatch(searchActions.searchForStories(searchFieldInput));
    history.push(`/search?q=${encodeURIComponent(searchFieldInput)}`);
  };

  useEffect(() => {
    if (!isComponentMounted.current && location.pathname !== "/") {
      isComponentMounted.current = true;
      const queryTerm = location.search.slice(3);
      dispatch(searchActions.setSearchFormSubmission(true));
      dispatch(searchActions.searchForStories(queryTerm));
      dispatch(
        searchActions.setSearchFieldInput(decodeURIComponent(queryTerm))
      );
    }
  }, [dispatch, location.pathname, location.search]);

  return (
    <form className="search-field" onSubmit={handleSubmit}>
      <input
        className="search-field__input"
        type="text"
        placeholder="Search stories by title, url or author"
        onChange={handleChange}
        value={searchFieldInput}
      />
      <div className="search-submit">
        <button className="search-submit__button" type="submit">
          <img
            className="search-submit__icon"
            src={searchIcon}
            alt="search-icon"
          />
        </button>
      </div>
      <SearchHistoryContainer userInput={searchFieldInput} />
    </form>
  );
};

export default SearchField;
