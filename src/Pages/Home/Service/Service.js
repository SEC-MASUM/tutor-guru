import React from "react";

const Service = ({ service }) => {
  const { name, description, img, price } = service;
  return (
    <div className="bg-white p-10  text-gray-800 text-center  flex  justify-center items-center mx-auto">
      <div className="space-y-4 ">
        <div className="flex justify-center">
          <img src={img} alt="" className="w-12" />
        </div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="h-1 w-2/4  bg-yellow-400 mx-auto"></div>
        <p className="text-xl">{description}</p>
        <h3>
          <span className="font-bold text-3xl">
            <span>$</span>
            {price}
          </span>
          <span className="text-xl font-medium">/12Lessons</span>
        </h3>
        <button className="w-full font-medium text-xl text-white bg-rose-600 uppercase block shadow-gray-400 shadow-sm rounded-lg px-6 py-3 mb-3 mx-auto">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default Service;
