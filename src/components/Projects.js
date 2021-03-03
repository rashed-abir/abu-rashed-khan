import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Data from "./ProjectsData";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

function Projects() {
  const [projects, setProjects] = useState(Data);
  const [search, setSearch] = useState("");

  const handleFilterCategory = (name) => {
    const filterData = Data.filter((project) =>
      project.category.includes(name)
    );
    setProjects(filterData);
  };

  const handleSearch = projects.filter((project) => {
    return project.name.toLowerCase().includes(search.toLowerCase());
  });

  const navbar_varient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="container projects"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects_navbar">
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
              handleFilterCategory("javascript");
            }}
          >
            JavaScript
          </div>
        </div>
        <div className="project-search">
          <input
            placeholder="Search Project"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <AiOutlineSearch className="search" />
        </div>
      </div>
      <div className="row">
        {handleSearch.length ? (
          handleSearch.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <h4 className="not-found">" {search} " Not Found</h4>
        )}
      </div>
    </motion.div>
  );
}

export default Projects;
