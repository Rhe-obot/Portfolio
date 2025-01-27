import React from "react";
import ProjectItem from "../ProjectItem";
import scissors from "../assets/scissors.png";
import jobsearch from "../assets/jobsearch.png";
import growlytics from "../assets/growlytics.png";
import techshop from "../assets/techshop.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Here are some of the projects I've worked on, showcasing my skills in
        ReactJS, web design, and problem-solving. Each project highlights my
        ability to create efficient, user-friendly, and visually appealing
        applications. I hope they demonstrate my passion for frontend
        development and continuous learning.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={scissors}
          title=" Scissors App"
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
          img={techshop}
          title="An Online Gadget Shop "
          link=" https://tomidigital.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
