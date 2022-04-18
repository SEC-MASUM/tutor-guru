import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  return (
    <div>
      <div className="flex justify-center mt-3">
        <div className="flex w-3/5 text-center items-center ">
          <div className="w-full block h-1 bg-rose-600"></div>
          <div className="block px-4">Or</div>
          <div className="w-full block h-1 bg-rose-600"></div>
        </div>
      </div>
      <div className="flex justify-center items-center p-5 space-x-4">
        <button id="facebook-login" className="text-2xl  text-blue-600">
          <BsFacebook></BsFacebook>
        </button>
        <button className="text-2xl">
          <FcGoogle></FcGoogle>
        </button>
        <button className="text-2xl">
          <BsGithub></BsGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
