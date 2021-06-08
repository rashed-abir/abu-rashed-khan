import React from "react";

function ProjectNavbar({ Data, setProjects, handleFilterCategory }) {
  return (
    <div className="projects_navbar-item">
      <div
        onClick={() => {
          setProjects(Data);
        }}
      >
        All
      </div>
      <div
        onClick={() => {
          handleFilterCategory("react.js");
        }}
      >
        React
      </div>
      <div
        onClick={() => {
          handleFilterCategory("java");
        }}
      >
        Java
      </div>
      <div
        onClick={() => {
          handleFilterCategory("express.js");
        }}
      >
        Express
      </div>
    </div>
  );
}

export default ProjectNavbar;
