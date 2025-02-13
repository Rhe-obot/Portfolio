import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Intern Frontend Developer",
    duration: "2month",
    details:
   " I worked as a Frontend intern at Bnkle LTD, where I contributed to building and maintaining the frontend of a web application, ensuring functionality and visual consistency. I was asked to design a pricing page for a seamless user experience, optimized web components for better performance and responsiveness, and I integrated a referral video  using a React library to enhance user engagement..."
      },

  {
    year: 2025,
    title: "Computer Science IT Programme",
    duration: "6Month",
    details:
      " I am currently part of the Computer Science IT program at Polaris Bank, where I assist customers in resolving issues with their banking app and have gained knowledge of the internal system used to log and address customer complaints. "
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">WORK</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
