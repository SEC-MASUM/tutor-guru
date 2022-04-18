import React from "react";

import myPhoto from "../../Assets/images/personal/masum-billah.png";
import bottomPattern from "../../Assets/images/download/slider-bottom-pattern.png";

const AboutMe = () => {
  return (
    <div className="relative justify-center items-center  h-[800px] bg-yellow-400 ">
      <div className="container  grid grid-cols-2 h-full  mx-auto">
        <div className=" flex justify-center items-center">
          <img
            src={myPhoto}
            alt="tutor-photo"
            className="w-[400px] border-yellow-300 border-8   shadow-yellow-600/50 shadow-lg rounded-full "
          />
        </div>

        <div className="w-full my-auto">
          {/* <h1 className="inline-block bg-white text-rose-600 font-bold text-6xl px-6 py-3">
            Md. Masum Billah
          </h1> */}
          <h1 className="inline-block  text-gray-800 font-bold text-6xl px-6 py-3">
            Md. Masum Billah
          </h1>
          <h1 className="text-slate-800 text-justify font-medium text-xl px-6 py-3">
            After completing the main course, I will do more practice projects.
            Have intention to learn backend development so that I can work as a
            full stack developer. Primarily my goal is to get hired as a
            software developer. And for this I am trying hard and soul.
          </h1>
        </div>
      </div>
      <img src={bottomPattern} alt="" className="w-full absolute bottom-0" />
    </div>
  );
};

export default AboutMe;
