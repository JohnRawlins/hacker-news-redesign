import React from "react";
import { useSelector } from "react-redux";
import Story from "../Story/index";
import Paginator from "../Paginator/index";
import "./styles.scss";
import "../Story/styles.scss";

const StoryContainer = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const createStoryList = (stories) => {
    return stories.map((story) => {
      const storyID = story.objectID;
      return <Story key={storyID} data={story} />;
    });
  };

  if (searchResults.found === true) {
    const storyList = createStoryList(searchResults.hits);
    return (
      <div className="story-search-results">
        <ul className="story-container">{storyList}</ul>
        <Paginator />
      </div>
    );
  } else if (searchResults.found === false) {
    return (
      <ul className="story-container story-container--error">
        <p className="story-query-error">
          {searchResults.errorMessage}
          {searchResults.query && (
            <span className="story-query-error__term">
              {searchResults.query}
            </span>
          )}
        </p>
      </ul>
    );
  } else {
    return null;
  }
};

export default StoryContainer;
