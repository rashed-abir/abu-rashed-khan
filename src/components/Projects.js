import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Data from "./ProjectsData";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState(Data);

  const handleFilterCategory = (name) => {
    const filterData = Data.filter((project) =>
      project.category.includes(name)
    );
    setProjects(filterData);
  };

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
      opacity:0,
      transition: {
        ease: 'easeInOut',
      }
    } 
  };

  return (
    <motion.div
      className="container projects"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <div className="projects_navbar">
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
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
