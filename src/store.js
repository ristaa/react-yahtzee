import { createStore } from "redux";
import rootReducer from "./reducers/index";

const numbers = [
  {
    id: 1,
    number: 6,
    saved: false
  },
  {
    id: 2,
    number: 6,
    saved: false
  },
  {
    id: 3,
    number: 6,
    saved: false
  },
  {
    id: 4,
    number: 6,
    saved: false
  },
  {
    id: 5,
    number: 6,
    saved: false
  }
];

const combs = [0, 0, 0, 0, 0, 0];

const disabled = true;
const counter = 0;

const defaultState = { numbers, combs, disabled, counter };

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
