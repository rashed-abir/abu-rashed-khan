import React from "react";
import { motion } from "framer-motion";

function SkillCard({ skill: { icon, title, about } }) {
  const navbar_varient = {
    hidden: {
      y: "-30px",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 1.0,
        type: "spring",
      },
    },
  };

  return (
    <div
      className="col-lg-6"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="skill-card">
        <img src={icon} alt="icon" className="skill-card_icon" />
        <div className="skill-card_body">
          <h6 className="skill-card_title">{title}</h6>
          <p className="skill-card_content"> {about} </p>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillCard;
