import React from "react";
import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center ">
      <div>
        <div className="w-[500px] pb-8">
          <h1 className="text-5xl pb-5 font-bold">
            Build Your Ideal
            <span className="inline-block bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] ">
            Explore Technologies
          </button>
          <button className="btn text-[#374151] border-2 px-12 ">
            Learn More
          </button>
        </div>
      </div>
      <div className="grid justify-center">
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
