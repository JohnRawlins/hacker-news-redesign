import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTermToSearchHistory } from "../../redux/actions/search";
import searchIcon from "./assets/search-icon.svg";
import "./styles.scss";

const SearchField = () => {
  const dispatch = useDispatch();
  const [searchFieldInput, setSearchFieldInput] = useState("");

  const handleChange = (event) => {
    setSearchFieldInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchFieldInput === "") return;
    else dispatch(addTermToSearchHistory(searchFieldInput));
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
