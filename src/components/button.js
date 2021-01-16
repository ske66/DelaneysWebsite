import React from "react";

const Button = (props) => {
  return (
    <button class="bg-pink-500 font-bold shadow-sm hover:bg-pink-600 text-white px-4 py-4 rounded w-48">
      {props.text}
    </button>
  );
};

export default Button;
