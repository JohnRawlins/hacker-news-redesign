import React from "react";
import "../Story/styles.scss";

const Story = () => {
  return (
    <article className="story">
      <div className="story-header">
        <h2 className="story-header__title">
          Yarn – A new package manager for JavaScript
        </h2>
        <a
          className="story-header__link"
          href="https://code.facebook.com/posts/1840075619545360"
        >
          https://code.facebook.com/posts/1840075619545360
        </a>
      </div>
      <ul className="story-meta">
        <li className="story-meta__points">1714 points</li>
        <li className="story-meta__user">cpojer</li>
        <li className="story-mega__date-created">Mar 20, 2014</li>
        <li className="story-mega__comments">469 comments</li>
      </ul>
    </article>
  );
};

export default Story;
