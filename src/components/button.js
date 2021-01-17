import React from "react";

const Button = (props) => {
  return (
    <button class="bg-pink-500 font-medium shadow-sm hover:bg-pink-600 text-white px-4 py-3 rounded w-48 duration-200 ease-in-out transition">
      {props.text}
    </button>
  );
};

export default Button;
