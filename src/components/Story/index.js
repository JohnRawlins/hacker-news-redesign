import React from "react";
import "../Story/styles.scss";

const Story = ({ data: story }) => {
  const formatDate = (date) => {
    const format = { year: "numeric", month: "short", day: "numeric" };
    const dateCreated = new Date(date);
    return dateCreated.toLocaleDateString("en-US", format);
  };
  return (
    <li className="story-wrapper">
      <article className="story">
        <div className="story-header">
          <h2 className="story-header__title">{story.title}</h2>
          <a className="story-header__link" href={story.url}>
            {story.url}
          </a>
        </div>
        <ul className="story-meta">
          <li className="story-meta__points">{story.points} points</li>
          <li className="story-meta__user">{story.author}</li>
          <li className="story-meta__date-created">
            {formatDate(story.created_at)}
          </li>
          <li className="story-meta__comments">
            {story.num_comments} comments
          </li>
        </ul>
      </article>
    </li>
  );
};

export default Story;
