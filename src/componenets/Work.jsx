import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Intern Frontend Developer - Bnkle LTD",
    duration: "2month",
    details:
   " I worked as a Frontend intern at Bnkle LTD, where I contributed to building and maintaining the frontend of a web application, ensuring functionality and visual consistency. I was asked to design a pricing page for a seamless user experience, optimized web components for better performance and responsiveness, and I integrated a referral video  using a React library to enhance user engagement..."
      },

  {
    year: 2025,
    title: "IT Intern – Polaris Bank LTD",
    duration: "6Month",
    details:
      "Supported networking tasks including structured cabling, patch panel configuration, and switch/router setup (Cisco). Provided remote desktop assistance, configured shared printers, diagnosed hardware issues, and gained exposure to enterprise IT infrastructure and basic software troubleshooting. Also assisted at the customer service desk, helping resolve client issues and improving service efficiency.  "
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#07090a]">WORK</h1>
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
