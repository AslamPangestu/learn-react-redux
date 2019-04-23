import React from "react";
import ReactDOM from "react-dom";

//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";

import App from "./components/App/App";
import reducers from "./reducers";

import "./index.css";

//high order function->create store
const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

// another way to create store
// const store = createStore(reducers, defaultState, applyMiddleware(promiseMiddleware));

// Sama kyk diatas
// const withMiddleware = applyMiddleware(promiseMiddleware);
// const storeWithMiddleware = withMiddleware(createStore);

//bungkus app dgn provider supaya bisa akses store
ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);