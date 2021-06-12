import React from "react";

function ProjectNavbar({ handleFilterCategory, active, light }) {
  return (
    <div
      className={light ? "projects_navbar-item_light" : "projects_navbar-item"}
    >
      <div
        onClick={() => {
          handleFilterCategory("All");
        }}
        className={active === "All" ? "test" : "test1"}
      >
        All
      </div>
      <div
        onClick={() => {
          handleFilterCategory("react.js");
        }}
        className={active === "react.js" ? "test" : "test1"}
      >
        React
      </div>
      <div
        onClick={() => {
          handleFilterCategory("java");
        }}
        className={active === "java" ? "test" : "test1"}
      >
        Java
      </div>
      <div
        onClick={() => {
          handleFilterCategory("express.js");
        }}
        className={active === "express.js" ? "test" : "test1"}
      >
        Express
      </div>
    </div>
  );
}

export default ProjectNavbar;
