import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addTermToSearchHistory } from "../../redux/actions/search";
import searchIcon from "./assets/search-icon.svg";
import "./styles.scss";

const SearchField = () => {
  const dispatch = useDispatch();
  const [searchFieldInput, setSearchFieldInput] = useState("");
  const currentState = useSelector((state) => state, shallowEqual);

  const isDuplicateSearchTerm = (term) => {
    return currentState.searchHistory.includes(term.toLowerCase());
  };

  const handleChange = (event) => {
    setSearchFieldInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchFieldInput === "") return;

    if (!isDuplicateSearchTerm(searchFieldInput)) {
      dispatch(addTermToSearchHistory(searchFieldInput.toLowerCase()));
    }
  };

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
    </form>
  );
};

export default SearchField;
