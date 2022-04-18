import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../../../Assets/images/service/color-icon-1.png";
import img2 from "../../../Assets/images/service/color-icon-2.png";
import img3 from "../../../Assets/images/service/color-icon-6.png";
import Service from "../../Home/Service/Service";
import bottomPattern from "../../../Assets/images/download/slider-bottom-pattern.png";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      name: "School Groups",
      description:
        "Group work can be an effective method to motivate students, encourage active learning, and develop key critical-thinking, communication, and decision-making skills.",
      img: img1,
      price: 350,
    },
    {
      id: 2,
      name: "Creative Groups",
      description:
        "Teachers who find creative ways to group students in the classroom can see many positive results. When compared to competitive and individual learning methods, group work tends to see a higher increase in academic improvement.",
      img: img2,
      price: 530,
    },
    {
      id: 3,
      name: "Individual Tutoring",
      description:
        "Individual tutoring may be especially helpful if you feel like you need help with specific parts of a course, or if your previous experience did not include.",
      img: img3,
      price: 120,
    },
  ];
  return (
    <div className="bg-yellow-400 py-10 relative ">
      <div className="container  mx-auto text-center mb-40">
        <h1 className="font-bold text-5xl py-8">Services</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2  md:gap-6 lg:grid-cols-3  lg:gap-6 py-10">
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
      <img src={bottomPattern} alt="" className="w-full absolute bottom-0" />
    </div>
  );
};

export default Services;
