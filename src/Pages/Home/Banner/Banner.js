import React from "react";

import person from "../../../Assets/images/person/person.png";
import bottomPattern from "../../../Assets/images/download/slider-bottom-pattern.png";

const Banner = () => {
  return (
    <div className="relative justify-center items-center   bg-yellow-400 ">
      <div className="container   grid grid-cols-1 md:grid-cols-2  mx-auto">
        <div className="  order-2 md:order-1">
          <img src={person} alt="tutorPhoto" />
        </div>

        <div className="  order-1 md:order-2 py-10 my-auto mx-auto">
          <h1 className=" text-rose-600 font-bold text-center md:text-left  text-6xl px-6 py-3 ">
            Professional Tutor
          </h1>
          <h1 className=" font-bold text-center md:text-left text-5xl px-6 py-3">
            For Your Children
          </h1>
        </div>
      </div>
      <img src={bottomPattern} alt="" className="w-full absolute bottom-0" />
    </div>
  );
};

export default Banner;
