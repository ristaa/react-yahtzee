import { combineReducers } from "redux";
import numbers from "./numbers";
import combs from "./combs";
import disabled from "./disabled";
import counter from "./counter";

const rootReducer = combineReducers({ numbers, combs, disabled, counter });

export default rootReducer;
