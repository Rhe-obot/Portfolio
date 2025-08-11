import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaMailBulk, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import myCV from "../assets/MYCV.pdf";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div
      id="main"
      className="relative w-full h-screen overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch " 
    >
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start text-green-300 w-full lg:w-1/2 px-6 pt-12 lg:pt-0 lg:ml-[15%] z-30">
        <h1 className="sm:text-5xl text-4xl font-bold">I'm RHEOBOTH</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4">
          I'm a
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Problem Solver",
              1000,
              "Tech Enthusiast",
              1000,
              "Coder",
              1000,
            ]}
            wrapper="div"
            cursor={true}
            speed={30}
            style={{
              fontSize: "1em",
              paddingLeft: "5px",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
          <a href="https://x.com/RheobothT" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/rhe_oboth?igsh=eGUyZXZhZzJkYzdy" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="mailto:tominiyirheobot@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaMailBulk size={20} />
          </a>
          <a href="https://www.linkedin.com/in/tominiyi-rheobot-9626a92a7" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.github.com/Rhe-obot" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

  
      <div
        className="absolute inset-0 w-full h-full z-0"
    
      >
        <Spline scene="https://prod.spline.design/cThRWMfVDWYH9njc/scene.splinecode" />
      </div>
  {/* Download CV Button */}
      <a
        href={myCV}
        download
        className="absolute bottom-4 right-5 z-40 bg-green-950 hover:bg-green-600 text-green-300 px-5 py-2 rounded-lg shadow-lg transition-colors duration-300"
      >
        Download CV
      </a>
    </div>
  );
};

export default Main;
