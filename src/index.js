import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import rootReducer from "./store/reducers";
import App from "./App";

import "./index.css";
axios.default.withCredentials = true;

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// I'm really proud of all the hard work everyone on our team did.  This was an excellent learning experience for me.
// I'm so grateful to be a part of Lambda and to have this opportunity.