import React from "react";
import bottomPattern from "../../Assets/images/download/slider-bottom-pattern.png";
const Checkout = () => {
  return (
    <div className="bg-yellow-400 relative pb-40">
      <div className="">
        <div className="container mx-auto">
          <div className="text-center  w-[500px] py-8 mx-auto">
            <div className="w-full space-y-4">
              <h2 className="text-left text-xl font-medium text-gray-800  capitalize">
                Edit Personal Details
              </h2>
              <hr className=" border-gray-800" />

              <input
                id="student-name"
                className="focus:ring-gray-300  text-gray-800 font-medium focus:ring-2 focus:bg-white w-full bg-gray-100 border-0 shadow rounded-lg px-4 py-2 mb-5"
                type="text"
                placeholder="Student Name"
              />

              <input
                id="parent-name"
                className="focus:ring-gray-300  text-gray-800 font-medium focus:ring-2 focus:bg-white w-full bg-gray-100 border-0 shadow rounded-lg px-4 py-2 mb-5"
                type="text"
                placeholder="Parent/Guardian Name"
              />
              <input
                id="street"
                className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white w-full bg-gray-100 border-0 shadow rounded-lg px-4 py-2 mb-5"
                type="text"
                placeholder="Street Address"
              />
              <input
                id="house"
                className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white w-full bg-gray-100 border-0 shadow  rounded-lg px-4 py-2 mb-5"
                type="text"
                placeholder="Flat, suite or floor"
              />
              <input
                id="city"
                className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white w-full bg-gray-100 border-0 shadow  rounded-lg px-4 py-2 mb-5"
                type="text"
                placeholder="City"
              />
              <input
                id="institute-name"
                className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white  w-full bg-gray-100 border-0 shadow  rounded-lg px-4 py-2 mb-5"
                type="text"
                placeholder="Academic Institute Name"
              />
              <input
                id="class"
                className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white  w-full bg-gray-100 border-0 shadow  rounded-lg px-4 py-2 mb-5"
                type="text"
                placeholder="Class"
              />
              <textarea
                rows="2"
                maxLength="300"
                id="instruction"
                className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white  w-full bg-gray-100 border-0 shadow  rounded-lg px-4 py-2 mb-5"
                type="text"
                placeholder="Additional comments"
              />

              <button
                id="login-button"
                className="w-full  font-medium text-white bg-rose-600 uppercase block  shadow-sm rounded-lg px-6 py-2 mb-3 mx-auto"
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={bottomPattern} alt="" className="w-full absolute bottom-0" />
    </div>
  );
};

export default Checkout;
