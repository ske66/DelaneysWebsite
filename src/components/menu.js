import React from "react";
import { Link } from "gatsby";

const Menu = () => {
  return (
    <header className="shadow sticky top-0 z-50	bg-white">
      <div className="grid grid-cols-6 my-auto py-4 mx-auto max-w-5xl">
        <Link className=" mx-auto uppercase text-xs font-bold font-sans my-auto opacity-60 hover:text-pink-500 hover:opacity-100 hover:underline transition ease-in-out duration-200">
          Home
        </Link>
        <Link className="mx-auto uppercase text-xs font-bold font-sans my-auto opacity-60 hover:text-pink-500 hover:opacity-100 hover:underline transition ease-in-out duration-200">
          About
        </Link>
        <Link className="col-span-2 mx-auto text-4xl my-auto font-serif text-gray-700 flex">
          Delaney Nicol
        </Link>
        <Link className="mx-auto uppercase text-xs font-bold font-sans my-auto opacity-60 hover:text-pink-500 hover:opacity-100 hover:underline transition ease-in-out duration-200">
          Projects
        </Link>
        <Link className="mx-auto uppercase text-xs font-bold font-sans my-auto opacity-60 hover:text-pink-500 hover:opacity-100 hover:underline transition ease-in-out duration-200">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Menu;
