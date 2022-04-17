import React from "react";

import person from "../../../Assets/images/person/person.png";
import bottomPattern from "../../../Assets/images/download/slider-bottom-pattern.png";

const Banner = () => {
  return (
    <div className="relative justify-center items-center  h-[800px] bg-yellow-400 ">
      <div className="container  grid grid-cols-2 h-full  mx-auto">
        <div className=" relative">
          <img
            src={person}
            alt="tutor-photo"
            className="h-[700px] absolute bottom-0"
          />
        </div>

        <div className="w-full my-auto">
          <h1 className="inline-block bg-white text-rose-600 font-bold text-6xl px-6 py-3">
            Professional Tutor
          </h1>
          <h1 className="text-gray-800 font-bold text-5xl px-6 py-3">For Your Children</h1>
        </div>
      </div>
      <img src={bottomPattern} alt="" className="w-full absolute bottom-0" />
    </div>
  );
};

export default Banner;
