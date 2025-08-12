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
    link.href = "/myCv.pdf"; // Put myCv.pdf in public folder
    link.download = "My_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setNav(false);
  };

  // Reusable nav items array
  const navItems = [
    { id: "main", label: "Home", icon: <AiOutlineHome size={20} />, action: () => handleScrollTo("main") },
    { id: "work", label: "Work", icon: <GrProjects size={20} />, action: () => handleScrollTo("work") },
    { id: "projects", label: "Projects", icon: <AiOutlineProject size={20} />, action: () => handleScrollTo("projects") },
    { id: "resume", label: "Resume", icon: <BsPerson size={20} />, action: handleDownloadResume },
    { id: "contact", label: "Contact", icon: <AiOutlineMail size={20} />, action: () => handleScrollTo("contact") },
  ];

  return (
    <div>
      {/* Mobile menu toggle */}
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

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 w-full h-full bg-[#07090a] text-green-300 flex flex-col justify-center items-center z-[90] transform transition-all duration-500 ease-in-out
        ${nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            {item.icon}
            <span className="pl-4">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Desktop floating nav with hover tooltips */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <div key={index} className="group relative flex justify-center">
              <button
                onClick={item.action}
                className="rounded-full shadow-lg bg-[#07090a] text-green-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                {item.icon}
              </button>
              {/* Hover label */}
              <span className="absolute left-full ml-2 px-2 py-1 bg-[#07090a] text-green-300 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
