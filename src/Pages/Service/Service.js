import React from "react";

const Service = ({ service }) => {
  const { name, description, img, price } = service;
  return (
    <div className=" text-gray-800 text-center  flex  justify-center items-center mx-auto">
      <div className="space-y-3 ">
        <div className="flex justify-center">
          <img src={img} alt="" className="w-12" />
        </div>
        <h1 className="font-bold">{name}</h1>
        <div className="h-1 w-2/4  bg-yellow-400 mx-auto"></div>
        <p>{description}</p>
        <h3>
          <span className="font-bold text-4xl">
            <span>$</span>
            {price}
          </span>
          <span>/12Lessons</span>
        </h3>
      </div>
    </div>
  );
};

export default Service;
