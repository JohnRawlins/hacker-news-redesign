import React, { useState } from "react";
import searchIcon from "./assets/search-icon.svg";
import "./styles.scss";

const SearchField = () => {
  const [searchFieldInput, setSearchFieldInput] = useState("");

  const handleChange = (event) => {
    setSearchFieldInput(event.target.value);
  };

  return (
    <form className="search-field">
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
