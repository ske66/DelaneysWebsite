import React from "react";
import { Link } from "gatsby";

const Button = ({ className, children, type, link, href }) => {
  var buttonType;

  switch (type) {
    case "primary":
      buttonType = "bg-pink-500 hover:bg-pink-600";
      break;
    case "secondary":
      buttonType = "bg-gray-600 hover:bg-gray-700";
      break;
    default:
      buttonType = "bg-pink-500 hover:bg-pink-600";
      break;
  }

  return (
    <Link to={link} href={href}>
      <button
        className={`font-medium shadow-sm text-white px-8 w-64 py-3 rounded duration-200 ease-in-out transition ${className} ${buttonType}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
