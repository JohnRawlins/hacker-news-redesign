import React from "react";
import searchIcon from "./assets/search-icon.svg";
import "./styles.scss";

const SearchField = () => {
  return (
    <form className="search-field">
      <input
        className="search-field__input"
        type="text"
        placeholder="Search stories by title, url or author"
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
