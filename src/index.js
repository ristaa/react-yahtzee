import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";
import Components from "./components/Components";

const rootElement = document.getElementById("root");

const router = (
  <Provider store={store}>
    <div className="yahtzee">
      <Components.CombosContainer />
      <Components.AppContainer />
    </div>
  </Provider>
);

ReactDOM.render(router, rootElement);
