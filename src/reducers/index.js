import { combineReducers } from "redux";
import home from "./home_reducer";
import movie from "./movie_reducer";

//combine 2 reducer
const rootReducer = combineReducers({
  home,
  movie
});

export default rootReducer;
