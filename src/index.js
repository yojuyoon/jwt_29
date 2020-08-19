import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./Styles/reset.scss";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./store/reducers";

const store = createStore(reducers, composeWithDevTools);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
