import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";

const reducers = combineReducers({
  category: CategoryReducer,
});

export default reducers;