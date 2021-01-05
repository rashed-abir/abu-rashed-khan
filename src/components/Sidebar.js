import React from "react";
import rashed2 from "../assets/images/rashed2.png";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";
import tie from "../assets/icons/tie.svg";
import pin from "../assets/icons/pin.svg";
import aburashedkhan from "../assets/aburashedkhan.pdf";
import email from "../assets/icons/email.png";
import phone from "../assets/icons/phone.png";
import { motion } from "framer-motion";

function Sidebar() {
  const handleEmailMe = () => {
    window.open("mailto:abir97bd@gmail.com");
  };

  const handleCallMe = () => {
    window.open("tel:+8801629341869");
  };

  const navbar_varient = {
    hidden: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
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
      className="sidebar"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
    >
      <img src={rashed2} alt="Abu Rashed Khan" className="sidebar_image" />
      <div className="sidebar_name">Abu Rashed Khan</div>
      <div className="sidebar_item sidebar_title">Web Developer</div>
      <a href={aburashedkhan} download="aburashedkhan.pdf">
        <div className="sidebar_item sidebar_resume">
          <img className="sidebar_icon" src={tie} alt="abu rashed khan" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar_social-icons">
        <a
          href="https://www.facebook.com/i.m.rashed.khan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Facebook" className="sidebar_icon" src={facebook} />
        </a>
        <a
          href="https://www.linkedin.com/in/abu-rashed-khan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Linked IN" className="sidebar_icon" src={linkedin} />
        </a>
        <a
          href="https://twitter.com/Abir97bdKhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Twitter" className="sidebar_icon" src={twitter} />
        </a>
      </figure>
      <div className="sidebar_contact">
        <div className="sidebar_item sidebar_github">
          <a
            href="https://github.com/rashed2155"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github" className="sidebar_icon" />
            Github
          </a>
        </div>
        <div className="sidebar_item">
          <img alt="Location" className="sidebar_icon" src={pin} />
          Dhaka, Bangladesh
        </div>
        <div className="sidebar_item">
          <img alt="email" className="sidebar_icon" src={email} />
          Abir97bd@gmail.com
        </div>
        <div
          className="sidebar_item"
          onClick={handleCallMe}
          style={{ cursor: "pointer" }}
        >
          <img alt="phone" className="sidebar_icon" src={phone} />
          +880 162 9341869
        </div>
      </div>
      <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>
        Email me
      </div>
    </motion.div>
  );
}

export default Sidebar;
