import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="bg-yellow-400 h-[700px]">
      <div className="container  mx-auto">
        <div className=" grid grid-cols-3 gap-8 py-56">
          <div className="bg-white flex justify-evenly items-center rounded-lg shadow-lg p-4">
            <MdLocationOn className="w-16 h-16"></MdLocationOn>
            <div className="space-y-3">
              <h1 className="font-medium text-2xl">Location</h1>
              <p>
                Suite # 1703 (17th floor), Sena Kalyan Bahaban, 195 Motijheel
                C/A Dhaka-1703 <br /> Bangladesh
              </p>
            </div>
          </div>
          <div className="bg-white flex justify-evenly items-center rounded-lg shadow-lg p-4">
            <IoCall className="w-16 h-16"></IoCall>
            <div className="space-y-3">
              <h1 className="font-medium text-2xl">Call Now</h1>
              <p>
                +880 123456789 <br />
                +880 123654987
              </p>
            </div>
          </div>
          <div className="bg-white flex justify-evenly items-center rounded-lg shadow-lg p-4">
            <SiGmail className="w-16 h-16"></SiGmail>
            <div className=" space-y-3">
              <h1 className="font-medium text-2xl">Email</h1>
              <p>
                info@tutorguru.col <br />
                service@tutorguru.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
