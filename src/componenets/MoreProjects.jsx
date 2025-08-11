import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import scissorsImg from "../assets/scissors.png";
import jobsearch from "../assets/jobsearch.png";
import growlytics from "../assets/growlytics.png";
import techshop from "../assets/techshop.png";
import Hoobank from "../assets/hoobank.png"
import gpt3 from "../assets/gpt3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Scissors App",
    img:  scissorsImg,
    link: "https://scissorsurl.netlify.app/",
  },
  {
    title: "Growlytics",
    img: growlytics,
    link: "https://growly-tics.netlify.app/",
  },
  {
    title: "Job Search App",
    img: jobsearch,
    link: "https://job-porttal.netlify.app/",
  },
  {
    title: "Online Gadget Shop",
    img: techshop,
    link: "https://tomidigital.netlify.app/",
  },
  {
    title: "Hoobank",
    img: Hoobank,
    link: "https://hoo-bank-tau-eight.vercel.app/",
  },
 {
    title: "GPT3",
    img: gpt3,
    link: "https://gpt-55.netlify.app/",
  },
];

const MoreProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[1040px] mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">More Projects</h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        Here are even more projects I've worked on. I'm truly passionate about web development, and every project here reflects
        my dedication to learning and growing. If you're considering me for a role or collaboration — please know that I will
        give it my all. I’m eager, ready, and I won’t let you down. 🙏💼
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-transform duration-300 ${
                index === activeIndex ? "scale-110 z-10" : "scale-95 opacity-80"
              }`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl shadow-md border border-blue-300 w-full h-64 object-cover"
              />
              <p className="mt-4 text-blue-900 font-semibold">{project.title}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoreProjects;
