import React from "react";
import { BsTwitter, BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo/logo-1.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="container mx-auto">
      <div className=" mx-auto">
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="" target="_blank" className="flex items-center">
                <img src={logo} className="mr-4 h-10" alt="Tutor Guru Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Tutor Guru
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Useful Links
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      to="https://flowbite.com"
                      target="_blank"
                      className="text-gray-800 hover:underline dark:text-gray-400"
                    >
                      Free Consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://tailwindcss.com/"
                      target="_blank"
                      rel="nofollow"
                      className="text-gray-800 hover:underline dark:text-gray-400"
                    >
                      Meet with me
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      to="#"
                      target="_blank"
                      className="text-gray-800 hover:underline dark:text-gray-400"
                    >
                      +880 123456789
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      target="_blank"
                      className="text-gray-800 hover:underline dark:text-gray-400"
                    >
                      Jashore, Bangladesh
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow me
                </h3>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <BsFacebook className="w-5 h-5"></BsFacebook>
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <BsInstagram className="w-5 h-5"></BsInstagram>
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <BsTwitter className="w-5 h-5"></BsTwitter>
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <BsWhatsapp className="w-5 h-5"></BsWhatsapp>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6 border-b-4 border-dashed text-xl  border-gray-800 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              &copy; {year}{" "}
              <Link
                to="https://flowbite.com"
                target="_blank"
                className="hover:underline"
              >
                Tutor Guru
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
