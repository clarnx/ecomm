import React from "react";
import ReactDOM from "react-dom/client";
import { render } from 'react-dom'
window.React = React
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./Store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
