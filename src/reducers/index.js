import { combineReducers } from "redux";
import { setProjectDetailReducer, viewProjectReducer } from "./projectReducer";

const reducers = combineReducers({
  allProjects: viewProjectReducer,
  projectDetail: setProjectDetailReducer,
});

export default reducers;
