import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const SearchTerm = ({ searchTerm }) => {
  return (
    <li className="search-term">
      <Link
        className="search-term__link"
        to={`/search?q=${encodeURIComponent(searchTerm)}`}
      >
        {searchTerm}
      </Link>
    </li>
  );
};

export default SearchTerm;
