import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import React from "react";
import App from "./App";
// import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
