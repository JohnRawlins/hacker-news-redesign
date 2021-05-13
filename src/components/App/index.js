import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import SearchField from "../SearchField";
import { BrowserRouter as Router } from "react-router-dom";
import StoryContainer from "../StoryContainer/index";
import "./styles.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <div className="hero">
            <div className="hero-content">
              <h1 className="hero-content__title">Hacker News</h1>
              <SearchField />
            </div>
          </div>
          <StoryContainer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
