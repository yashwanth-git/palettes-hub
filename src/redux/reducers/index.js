import { combineReducers } from "redux";
import darkMode from "./darkMode";
import palette from "./palette";

const reducers = combineReducers({
  darkMode,
  palette,
});

export default reducers;
