import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as searchActions from "../../redux/actions/search";
import "./styles.scss";

const SearchTerm = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = ({ target }) => {
    const searchTerm = target.textContent;
    dispatch(searchActions.setSearchFormSubmission(true));
    dispatch(searchActions.searchForStories(searchTerm));
    dispatch(searchActions.setSearchFieldInput(searchTerm));
    history.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <li className="search-term" onClick={handleClick}>
      {searchTerm}
    </li>
  );
};

export default SearchTerm;
