import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({ light }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    let currentUrl = window.location.href;
    if (currentUrl.endsWith("/")) {
      setActive("About");
    } else if (currentUrl.endsWith("/projects")) {
      setActive("Projects");
    } else if (currentUrl.endsWith("/resume")) {
      setActive("Resume");
    }
  }, [active]);

  const navbar_varient = {
    hidden: {
      y: "-30px",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className={light ? "navbar_light" : "navbar"}
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
    >
      <div className={light ? "navbar_active_light" : "navbar_active"}>
        {active}
      </div>
      <div className={light ? "navbar_items_light" : "navbar_items"}>
        {active !== "About" && (
          <Link to="/">
            <div
              className={light ? "navbar_item_light" : "navbar_item"}
              onClick={() => {
                setActive("About");
              }}
            >
              About
            </div>
          </Link>
        )}
        {active !== "Resume" ? (
          <Link to="/resume">
            <div
              className={light ? "navbar_item_light" : "navbar_item"}
              onClick={() => {
                setActive("Resume");
              }}
            >
              Resume
            </div>
          </Link>
        ) : null}

        {active !== "Projects" && (
          <Link to="projects">
            <div
              className={light ? "navbar_item_light" : "navbar_item"}
              onClick={() => {
                setActive("Projects");
              }}
            >
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
