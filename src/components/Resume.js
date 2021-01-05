import React from "react";
import Languages from "./Languages";
import Tools from "./Tools";
import Bar from "./Bar";
import { motion } from "framer-motion";
import EducationData from "./EducationData";
import ExperienceData from "./ExperienceData";

function Resume() {
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
      exit: {
        opacity: 0,
        transition: {
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.div
      className="container resume"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Education</h4>
          {EducationData.map((data) => (
            <div className="resume-card_body" key={data.heading}>
              <h5 className="resume-card_title"> {data.title} </h5>
              <p className="resume-card_name">{data.name}</p>
              <p className="resume-card_details">{data.details}</p>
            </div>
          ))}
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Experience</h4>
          {ExperienceData.map((data) => (
            <div className="resume-card_body" key={data.heading}>
              <h5 className="resume-card_title"> {data.title} </h5>
              <p className="resume-card_name">{data.name}</p>
              <p className="resume-card_details">{data.details}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Language & Framework</h5>
          <div className="resume-language_body mt-4">
            {Languages.map((language) => (
              <Bar valeu={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Tools & Softwares</h5>
          <div className="resume-language_body mt-4">
            {Tools.map((tool) => (
              <Bar valeu={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
