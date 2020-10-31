import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { bugAdded, bugRemoved,bugResolved } from "./actions";
const unsubscribe = store.subscribe(() =>
  console.log("store updated", store.getState())
);
store.dispatch(bugAdded("bug 1"));
store.dispatch(bugResolved(1));
unsubscribe();
store.dispatch(bugRemoved(1));
console.log(store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
