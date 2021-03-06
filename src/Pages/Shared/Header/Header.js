import React from "react";
import logo from "../../../Assets/images/logo/logo-1.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../Firebase/Firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-white px-2 py-3  ">
      <div className="container flex flex-col  md:flex-row justify-center md:justify-between items-center md:items-center mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} className="h-10" alt="Red Onion Logo" />
          <h1 className="font-bold whitespace-nowrap text-2xl text-gray-800">
            Tutor Guru
          </h1>
        </Link>

        <ul className="flex flex-col md:flex-row space-y-2  md:space-x-8 md:items-center text-sm font-medium  text-gra">
          <Link
            to="/home"
            className="uppercase text-center text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600"
          >
            Home
          </Link>

          <Link
            to="/blog"
            className="uppercase text-center text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="uppercase text-center text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600"
          >
            Contact
          </Link>

          <Link
            to="/about/me"
            className="uppercase text-center text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600 whitespace-nowrap"
          >
            About Me
          </Link>
          <div className="flex items-center space-x-1">
            {user ? (
              <Link
                to="/home"
                onClick={logout}
                className="text-white bg-rose-600 px-4 py-1.5 rounded-full whitespace-nowrap"
              >
                Sign out
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white bg-rose-600 px-4 py-1.5 rounded-full"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="text-white bg-rose-600 px-4 py-1.5 rounded-full whitespace-nowrap"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
