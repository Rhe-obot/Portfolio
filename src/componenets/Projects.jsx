import React from "react";
import ProjectItem from "../ProjectItem";
import scissors from "../assets/scissors.png";
import jobsearch from "../assets/jobsearch.png";
import growlytics from "../assets/growlytics.png";
import Hoobank from "../assets/hoobank.png"
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-8  py-16  ">
      <h1 className="text-4xl font-bold text-center text-[#07090a]">
        Projects
      </h1>
      <p className="text-center text-2xl py-8 text-[#07090a]">
        Here are some of the projects I've worked on, showcasing my skills in
        ReactJS, web design, and problem-solving. Each project highlights my
        ability to create efficient, user-friendly, and visually appealing
        applications. I hope they demonstrate my passion for frontend
        development and continuous learning.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={scissors}
          title="Scissors App"
          link="https://scissorsurl.netlify.app/"
        />
        <ProjectItem
          img={growlytics}
          title="A Data Analytics App"
          link="https://growly-tics.netlify.app/"
        />
        <ProjectItem
          img={jobsearch}
          title="A Job Search App"
          link="https://job-porttal.netlify.app/"
        />
        <ProjectItem
          img={Hoobank}
          title="HOOBANK"
          link="https://hoo-bank-tau-eight.vercel.app/"
        />
      </div>
      <div className="flex justify-center mt-16">
  <Link
    to="/more-projects"
    className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-green-950 rounded-md group"
  >
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#07090a] rounded group-hover:-mr-4 group-hover:-mt-4">
      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#07090a] rounded group-hover:-ml-4 group-hover:-mb-4">
      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#07090a] rounded-md group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
      See More Project
    </span>
  </Link>
</div>

    </div>
  );
};

export default Projects;
