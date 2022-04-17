import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../../Assets/images/service/color-icon-1.png";
import img2 from "../../Assets/images/service/color-icon-2.png";
import img3 from "../../Assets/images/service/color-icon-6.png";
import Service from "../Service/Service";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      name: "School Groups",
      description:
        "Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      img: img1,
      price: 350,
    },
    {
      id: 2,
      name: "Creative Groups",
      description:
        "Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      img: img2,
      price: 530,
    },
    {
      id: 3,
      name: "Individual Tutoring",
      description:
        "Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      img: img3,
      price: 120,
    },
  ];
  return (
    <div className="bg-yellow-400 py-10">
      <div className="container  mx-auto text-center">
        <h1 className="font-bold text-5xl py-8">Services</h1>
        <div className="grid grid-cols-3 gap-6 py-10">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className=" font-medium text-xl text-gray-800 bg-white uppercase block shadow-gray-400 shadow-sm rounded-lg px-10 py-4 mb-3 mx-auto"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Services;
