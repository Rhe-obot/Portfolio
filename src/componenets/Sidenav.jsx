import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = () => setNav(!nav);

  const handleScrollTo = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    setNav(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/myCv.pdf"; // Place myCv.pdf in your public folder
    link.download = "My_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setNav(false);
  };

  const renderNavItem = (icon, label, action) => (
    <button
      onClick={action}
      className="w-[75%] flex justify-center items-center rounded-full shadow-sm shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
    >
      {icon}
      <span className="pl-4">{label}</span>
    </button>
  );

  return (
    <div>
      {/* Always fixed toggle button */}
      {nav ? (
        <AiOutlineClose
          onClick={handleNav}
          className="fixed top-5 right-4 z-[100] md:hidden text-green-300 bg-[#07090a] rounded-full p-2 shadow-lg"
          size={40}
        />
      ) : (
        <AiOutlineMenu
          onClick={handleNav}
          className="fixed top-5 right-4 z-[100] md:hidden text-green-300 bg-[#07090a] rounded-full p-2 shadow-lg"
          size={40}
        />
      )}

      {/* Mobile menu with fade & slide animation */}
      <div
        className={`fixed inset-0 w-full h-full bg-[#07090a] text-green-300 flex flex-col justify-center items-center z-[90] transform transition-all duration-500 ease-in-out
        ${nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {renderNavItem(<AiOutlineHome size={20} />, "Home", () => handleScrollTo("main"))}
        {renderNavItem(<GrProjects size={20} />, "Work", () => handleScrollTo("work"))}
        {renderNavItem(<AiOutlineProject size={20} />, "Projects", () => handleScrollTo("projects"))}
        {renderNavItem(<BsPerson size={20} />, "Resume", handleDownloadResume)}
        {renderNavItem(<AiOutlineMail size={20} />, "Contact", () => handleScrollTo("contact"))}
      </div>

      {/* Desktop floating nav */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <button
            onClick={() => handleScrollTo("main")}
            className="rounded-full shadow-lg bg-[#07090a] text-green-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </button>
          <button
            onClick={() => handleScrollTo("work")}
            className="rounded-full shadow-lg bg-[#07090a] text-green-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </button>
          <button
            onClick={() => handleScrollTo("projects")}
            className="rounded-full shadow-lg bg-[#07090a] text-green-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </button>
          <button
            onClick={handleDownloadResume}
            className="rounded-full shadow-lg bg-[#07090a] text-green-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="rounded-full shadow-lg bg-[#07090a] text-green-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
