import React from "react";
import Button from "./button";

const Hero = () => {
  return (
    <section className="my-32">
      <div class="relative container mx-auto text-center h-96 w-full flex items-center justify-center max-w-7xl">
        <div class="absolute bg-pink-100 rounded-full transform left-1/2 -translate-x-1/2 w-96 h-full"></div>
        <div class="relative text-center space-y-6 flex flex-col items-center">
          <h1 class="z-40">Costume Designer &amp; Maker</h1>
          <div class="w-6 h-1 bg-gray-700 rounded"></div>
          <h4 class="max-w-screen-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </h4>
          <div class="flex place-items-center space-x-8">
            <Button text="Recent Projects" />
            <Button text="Past Projects" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
