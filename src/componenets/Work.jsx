import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Intern Frontend Developer",
    duration: "2month",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac vehicula velit. Ut non ipsum vel sem laoreet aliquam. Morbi dignissim commodo diam quis interdum. Ut posuere sapien vitae convallis accumsan. Integer mauris mauris, maximus ullamcorper eros sed, tempor mattis erat.  ",
  },
  {
    year: 2025,
    title: "Computer Science IT Programme",
    duration: "6Month",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac vehicula velit. Ut non ipsum vel sem laoreet aliquam. Morbi dignissim commodo diam quis interdum. Ut posuere sapien vitae convallis accumsan. Integer mauris mauris, maximus ullamcorper eros sed, tempor mattis erat.  ",
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
