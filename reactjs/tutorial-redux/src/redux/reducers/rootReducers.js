import { combineReducers } from "redux";
import newsReducer from "./newsReducers";

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
