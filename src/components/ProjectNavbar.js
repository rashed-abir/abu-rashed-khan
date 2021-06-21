import React from "react";

function ProjectNavbar({ handleFilterCategory, active, light }) {
  return (
    <div
      className={
        light
          ? "projects_navbar-item_light text-capitalize"
          : "projects_navbar-item text-capitalize"
      }
    >
      <div
        onClick={() => {
          handleFilterCategory("All");
        }}
        className={active === "All" ? "active_nav" : "nav"}
      >
        all
      </div>
      <div
        onClick={() => {
          handleFilterCategory("react.js");
        }}
        className={active === "react.js" ? "active_nav" : "nav"}
      >
        react
      </div>
      <div
        onClick={() => {
          handleFilterCategory("java");
        }}
        className={active === "java" ? "active_nav" : "nav"}
      >
        java
      </div>
      <div
        onClick={() => {
          handleFilterCategory("express.js");
        }}
        className={active === "express.js" ? "active_nav" : "nav"}
      >
        MERN
      </div>
    </div>
  );
}

export default ProjectNavbar;
