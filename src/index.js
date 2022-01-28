import React from "react";
import ReactDOM from "react-dom";
// Import Milligram for Some Default Styling
import "milligram";
import "./index.css";
// IMPORT ROUTER
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(

  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="*" element={<App />}>
          </Route>
        </Routes>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
