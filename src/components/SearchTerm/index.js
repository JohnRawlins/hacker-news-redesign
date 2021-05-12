import React from "react";
import "./styles.scss";

const SearchTerm = ({ searchTerm }) => {
  return <li className="search-term">{searchTerm}</li>;
};

export default SearchTerm;
