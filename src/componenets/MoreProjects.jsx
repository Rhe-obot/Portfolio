import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import scissorsImg from "../assets/scissors.png";
import jobsearch from "../assets/jobsearch.png";
import growlytics from "../assets/growlytics.png";
import techshop from "../assets/techshop.png";
import Hoobank from "../assets/hoobank.png";
import gpt3 from "../assets/gpt3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  { title: "Scissors App", img: scissorsImg, link: "https://scissorsurl.netlify.app/" },
  { title: "Growlytics", img: growlytics, link: "https://growly-tics.netlify.app/" },
  { title: "Job Search App", img: jobsearch, link: "https://job-porttal.netlify.app/" },
  { title: "Online Gadget Shop", img: techshop, link: "https://tomidigital.netlify.app/" },
  { title: "Hoobank", img: Hoobank, link: "https://hoo-bank-tau-eight.vercel.app/" },
  { title: "GPT3", img: gpt3, link: "https://gpt-55.netlify.app/" },
];

const MoreProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-auto mx-90 px-4 py-16 text-center bg-[#07090a]">
     <style>{`
   .swiper-button-next,
  .swiper-button-prev {
    top: 40% !important;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .swiper:hover .swiper-button-next,
  .swiper:hover .swiper-button-prev {
    opacity: 1;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #22c55e; /* green */
    font-size: 50px;
  }

 
  .swiper-pagination-bullet {
    background: #22c55e;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    background: #4bde80 !important;
    opacity: 1;
  }
`}</style>


      <h1 className="text-4xl font-bold mb-6 text-green-300">More Projects</h1>
      <p className="text-green-400 max-w-2xl mx-auto mb-10">
        Here are even more projects I've worked on. I'm truly passionate about web development, and every project here reflects
        my dedication to learning and growing. If you're considering me for a role or collaboration — please know that I will
        give it my all. I’m eager, ready, and I won’t let you down. 🙏💼
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoHeight={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full min-h-[400px]"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-transform duration-300 ${
                index === activeIndex ? "scale-110 z-10" : "scale-95 opacity-80"
              }`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-xl shadow-md border border-green-400 w-full h-60 object-cover"
                />
                <p className="mt-4 text-green-500 font-semibold text-center whitespace-normal">
                  {project.title}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoreProjects;
