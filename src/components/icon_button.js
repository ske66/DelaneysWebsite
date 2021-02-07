import React from "react";
import { GrMail, GrInstagram, GrLinkedin } from "react-icons/gr";

export const InstagramButton = (props) => {
  return (
    <a href={props.link} target="_blank">
      <button className="bg-gray-700 hover:bg-pink-500 p-3 rounded-full duration-200 ease-in-out transition">
        <GrInstagram fontSize={24} className="text-white" />
      </button>
    </a>
  );
};

export const LinkedInButton = (props) => {
  return (
    <a href={props.link} target="_blank">
      <button className="bg-gray-700 hover:bg-pink-500 p-3 rounded-full duration-200 ease-in-out transition">
        <GrLinkedin fontSize={24} className="text-white" />
      </button>
    </a>
  );
};

export const EmailButton = (props) => {
  return (
    <a href={props.link}>
      <button className="bg-gray-700 hover:bg-pink-500 p-3 rounded-full duration-200 ease-in-out transition">
        <GrMail fontSize={24} className="text-white" />
      </button>
    </a>
  );
};
