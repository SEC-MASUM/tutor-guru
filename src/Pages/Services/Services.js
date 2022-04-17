import React from "react";

import img1 from "../../Assets/images/service/color-icon-1.png";
import img2 from "../../Assets/images/service/color-icon-2.png";
import img3 from "../../Assets/images/service/color-icon-3.png";
import Service from "../Service/Service";

const Services = () => {
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
    <div className="container  mx-auto text-center">
      <h1 className="font-bold text-5xl py-8">Services</h1>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
