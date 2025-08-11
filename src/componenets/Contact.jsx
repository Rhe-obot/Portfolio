import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-boldtext-center text-[#07090a]">
        Contact{" "}
      </h1>
      <form
        action="https://getform.io/f/bpjjqpob"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-m py-2 text-[#07090a]">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-m py-2 text-[#07090a]">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-m py-2 text-[#07090a]">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="name"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-m py-2 text-[#07090a]">Subject</label>
          <input
            className=" border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-m py-2 text-[#07090a]">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button 
        className="relative flex items-center w-full px-6 py-3 overflow-hidden font-medium transition-all bg-green-950 rounded-md group">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#07090a] rounded group-hover:-mr-4 group-hover:-mt-4">
      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#07090a] rounded group-hover:-ml-4 group-hover:-mb-4">
      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#07090a] rounded-md group-hover:translate-x-0"></span>
    <span className="relative w-full  text-white transition-colors duration-200 ease-in-out group-hover:text-white">
      Send Message
    </span>
          
        </button>
      </form>
    </div>
  );
};

export default Contact;
