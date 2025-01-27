import React from "react";
import pexels from "../assets/pexels1.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaMailBulk, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={pexels}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            {" "}
            I'm RHEOBOTH
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
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
            <a
              href="https://x.com/RheobothT"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/rhe_oboth?igsh=eGUyZXZhZzJkYzdy"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:tominiyirheobot@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaMailBulk size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tominiyi-rheobot-9626a92a7"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.github.com/Rhe-obot"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
