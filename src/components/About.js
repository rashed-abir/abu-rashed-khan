import React from "react";
import api from "../assets/icons/api.svg";
import computer from "../assets/icons/computer.svg";
import backend from "../assets/icons/backend.svg";
import javag from "../assets/icons/javag.svg";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

function About() {
  const skills = [
    {
      icon: computer,
      title: "Frontend Development",
      about:
        "I can built a beautiful and scalable SPA using HTML,CSS and React.js.",
    },
    {
      icon: backend,
      title: "Backend Development",
      about: "Handle database, server, api using ExpressJS and MySql/MongoDB.",
    },
    {
      icon: api,
      title: "API Development",
      about: "Develop robust REST API using ExpressJS-Rest-API.",
    },
    {
      icon: javag,
      title: "Java GUI Development",
      about:
        "I can built java GUI application using Neatbeans and Oracle/MySql.",
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
      className="about"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <h6 className="about_intro">
        I am currently pursuing B.SC(Final Year) in Computer Science Engineering
        from Daffodil International University. I consider myself who is persistent, a
        quick learner and loves problem solving by using simple and scalable
        solutions.
      </h6>
      <div className="container about_container">
        <h6 className="about_heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
