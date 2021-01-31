import React from "react";
import { motion } from "framer-motion";

function Bar({ valeu: { icon, name, level } }) {
  const navbar_varient = {
    hidden: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 1.5,
        type: "spring",
      },
    },
  };

  const bar_width = `${level}%`;

  return (
    <div className="bar">
      <motion.div
        variants={navbar_varient}
        initial="hidden"
        animate="visible"
        className="bar_wrapper"
        style={{ width: bar_width }}
      >
        <span className="bar_name">
          <img src={icon} alt="icon" className="bar_icon" />
          {name}
        </span>
      </motion.div>
    </div>
  );
}

export default Bar;
