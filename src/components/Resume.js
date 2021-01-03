import React from "react";
import java from "../assets/icons/java.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import html from "../assets/icons/html.svg";
import sql from "../assets/icons/sql.png";
import c from "../assets/icons/c.png";
import github from "../assets/icons/github.svg";
import photo from "../assets/icons/photo.svg";
import redux from "../assets/icons/redux.svg";
import filmora from "../assets/icons/filmora.svg";
import cam from "../assets/icons/cam.svg";
import postman from "../assets/icons/postman.svg";
import Bar from "./Bar";
import { motion } from "framer-motion";

function Resume() {
  const languages = [
    {
      icon: java,
      name: "Java Enterprise",
      level: "80",
    },
    {
      icon: js,
      name: "Java Script",
      level: "60",
    },
    {
      icon: c,
      name: "C Programme",
      level: "85",
    },
    {
      icon: react,
      name: "React",
      level: "55",
    },
    {
      icon: node,
      name: "Node js",
      level: "40",
    },
    {
      icon: html,
      name: "HTML & CSS",
      level: "70",
    },
    {
      icon: sql,
      name: "SQL",
      level: "85",
    },
    {
      icon: js,
      name: "Express js",
      level: "65",
    },
    {
      icon: redux,
      name: "React-Redux",
      level: "55",
    },
  ];

  const tools = [
    {
      icon: github,
      name: "Git",
      level: "77",
    },
    {
      icon: cam,
      name: "Camtacia",
      level: "90",
    },
    {
      icon: filmora,
      name: "Filmora",
      level: "70",
    },
    {
      icon: photo,
      name: "Photoshop",
      level: "57",
    },
    {
      icon: postman,
      name: "Postman API",
      level: "65",
    },
  ];

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
        opacity:0,
        transition: {
          ease: 'easeInOut',
        }
      } 
    },
  };

  return (
    <motion.div
      className="container resume"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Education</h4>
          <div className="resume-card_body">
            <h5 className="resume-card_title">Computer Science Engineering</h5>
            <p className="resume-card_name">
              Daffodil International University (2018-Present)
            </p>
            <p className="resume-card_details">
              I am currently pursuing B.sc in Computer Science Engineering from
              Daffodil International University CGPA (till 8th sem) : 3.42
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Experience</h4>
          <div className="resume-card_body">
            <h5 className="resume-card_title">Data Fetching</h5>
            <p className="resume-card_name">
              Under Associate Head Teacher (2 Months)
            </p>
            <p className="resume-card_details">
              I worked with my Associate Head Teacher to make a web application,
              which's name is khamar360. My role was data fetching from backend
              to frontend.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Language & Framework</h5>
          <div className="resume-language_body mt-4">
            {languages.map((language) => (
              <Bar valeu={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Tools & Softwares</h5>
          <div className="resume-language_body mt-4">
            {tools.map((tool) => (
              <Bar valeu={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
