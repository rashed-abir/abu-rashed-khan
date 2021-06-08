import { SET_PROJECT, VIEW_PROJECTS } from "../context/projectContext";

export const viewProjectsAction = (projects) => {
  return {
    type: VIEW_PROJECTS,
    payload: projects,
  };
};

export const setProjectDetails = (project) => {
  return{
    type: SET_PROJECT,
    payload: project
  }
}