import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import ProjectNavbar from "./ProjectNavbar";

function Projects() {
  const Data = useSelector((state) => state.allProjects);
  const [projects, setProjects] = useState(Data);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const handleFilterCategory = (name) => {
    if (name === "All") {
      setProjects(Data);
      setActive(name);
    } else {
      const filterData = Data.filter((project) =>
        project.category.includes(name)
      );
      setProjects(filterData);
      setActive(name);
    }
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
        <ProjectNavbar
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
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
