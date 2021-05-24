import React from "react";
import api from "../assets/icons/api.png";
import computer from "../assets/icons/computer.png";
import backend from "../assets/icons/backend.png";
import javag from "../assets/icons/javag.png";
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
      about:
        "i can Handle database, server, API using NodeJS, ExpressJS and MySql/MongoDB.",
    },
    {
      icon: api,
      title: "API Development",
      about: "I can Develop robust REST API using ExpressJS-Rest-API.",
    },
    {
      icon: javag,
      title: "Java Development",
      about:
        "I can built java application using java and Oracle, MySql or SQLite database.",
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
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="about"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about_intro">
        I am currently pursuing B.SC(Final Year) in Computer Science Engineering
        from Daffodil International University. I consider myself who is
        persistent, a quick learner and loves problem solving by using simple
        and scalable solutions.
      </h6>
      <h6 className="about_intro" style={{ marginTop: "-40px" }}>
        In my everyday life, I try to love reading a book, write different
        things, helping people, and coding as well. I also think about different
        sorts of people. That basically inspires me as a different aspect.
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
