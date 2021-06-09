import React from "react";
import rashed from "../assets/images/rashed abir.JPEG";
import facebook from "../assets/icons/facebook.png";
import linkedin from "../assets/icons/linkedin.png";
import twitter from "../assets/icons/twitter.png";
import github1 from "../assets/icons/github1.png";
import tie from "../assets/icons/tie.png";
import pin from "../assets/icons/pin.png";
import aburashedkhan from "../assets/aburashedkhan.pdf";
import email from "../assets/icons/email.png";
import phone from "../assets/icons/phone.png";
import instagram from "../assets/icons/instagram.png";
import { motion } from "framer-motion";
import Typed from "react-typed";

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
      <img
        title="Rashed Abir"
        src={rashed}
        alt="Rashed Abir"
        className="sidebar_image"
      />
      <div className="sidebar_name" title="Rashed Abir">
        Abu Rashed Khan
      </div>
      <div className="sidebar_item sidebar_title">
        <Typed
          strings={[
            "Computer Engineer",
            "Web Designer",
            "Web Developer",
            "React Developer",
            "JavaScript Developer",
            "Full Stack Developer",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </div>
      <a href={aburashedkhan} download="aburashedkhan.pdf">
        <div className="sidebar_item sidebar_resume">
          <img className="sidebar_icon" src={tie} alt="Rashed Abir" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar_social-icons">
        <a
          href="https://www.facebook.com/abu.rashed.abir/"
          target="_blank"
          rel="noopener noreferrer"
          title="FB Link"
        >
          <img
            alt="Facebook"
            className="sidebar_icon social-icon"
            src={facebook}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rashedabir/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin Link"
        >
          <img
            alt="Linked IN"
            className="sidebar_icon social-icon"
            src={linkedin}
            style={{ width: "44.4px", height: "44.4px" }}
          />
        </a>
        <a
          href="https://twitter.com/rashedabir_"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter Link"
        >
          <img
            alt="Twitter"
            className="sidebar_icon social-icon"
            src={twitter}
          />
        </a>
        <a
          href="https://www.instagram.com/rashedabir_/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram Link"
        >
          <img
            alt="instagram"
            className="sidebar_icon social-icon"
            src={instagram}
          />
        </a>
      </figure>
      <div className="sidebar_contact">
        <div className="sidebar_item sidebar_github">
          <a
            href="https://github.com/rashedabir"
            target="_blank"
            rel="noopener noreferrer"
            title="Github Link"
          >
            <img
              src={github1}
              alt="Github"
              className="sidebar_icon"
              style={{ height: "33px", width: "33px" }}
            />
            Github
          </a>
        </div>
        <div className="sidebar_item" title="Location">
          <img alt="Location" className="sidebar_icon" src={pin} />
          Dhaka, Bangladesh
        </div>
        <div className="sidebar_item" onClick={handleEmailMe} title="Click">
          <img alt="Rashed Abir" className="sidebar_icon" src={email} />
          Abir97bd@gmail.com
        </div>
        <div
          className="sidebar_item phone"
          onClick={handleCallMe}
          style={{ cursor: "pointer" }}
          title="Click"
        >
          <img alt="Rashed Abir" className="sidebar_icon" src={phone} />
          +880 162 9341869
        </div>
      </div>
      <a
        href="https://www.fiverr.com/rashedkhan126"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        <div
          className="sidebar_item sidebar_email"
          style={{ textTransform: "uppercase", letterSpacing: "1.5px" }}
        >
          HIRE ME
        </div>
      </a>
    </motion.div>
  );
}

export default Sidebar;
