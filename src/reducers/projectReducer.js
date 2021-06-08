import Data from "../components/ProjectsData";
import { SET_PROJECT, VIEW_PROJECTS } from "../context/projectContext";

const initialState = {
  projectDetail: [],
};

export const viewProjectReducer = (state = Data, action) => {
  switch (action.type) {
    case VIEW_PROJECTS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setProjectDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
