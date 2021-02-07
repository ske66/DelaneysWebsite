import React from "react";
import Button from "./button";
import backsvg from "../images/topography.svg";

function Contact() {
  return (
    <section
      className="bg-gray-600 py-24 p-8"
      style={{ backgroundImage: `url(${backsvg})` }}
    >
      <div className="flex container mx-auto max-w-7xl ">
        <div className="bg-white w-6 h-0.5 my-auto" />
        <h5 className="text-white pl-4">Contact</h5>
      </div>
      <div className="container mx-auto grid grid-cols-2 max-w-7xl my-16 space-x-16">
        <div className="my-auto ml-16">
          <h2 className="text-white">Contact Me</h2>
          <h6 className="mt-4">Send an email</h6>
          <p className="text-white mt-4 mb-8">
            if you have any questions or want to discuss potential work
            opportunities, you can contact me using the form below
          </p>
          <input
            name="email"
            type="email"
            className="ease-in-out duration-200 transition form-input p-3 mt-2 rounded block w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="Email"
          />

          <input
            type="text"
            name="subject"
            className="ease-in-out duration-200 transition form-input p-3 mt-4 rounded block w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="Subject"
          />

          <textarea
            name="message"
            className="ease-in-out duration-200 transition form-input h-48 p-3 mt-4 rounded block w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="Message"
          />
          <Button className="mt-8 w-full">Send Message</Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
