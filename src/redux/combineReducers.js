import reducer from "./reducer";
import { combineReducers } from "redux";
import themeReducer from "./themeReducer.js";

const allReducers = combineReducers({
  reducer,
  themeReducer,
});

export default allReducers;
