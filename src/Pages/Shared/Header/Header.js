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
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <img src={logo} className="h-10" alt="Red Onion Logo" />
        </Link>

        <ul className="flex space-x-8 text-sm font-medium items-center">
          <Link to="/home" className="uppercase text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600">
            Home
          </Link>
          <Link to="/services" className="uppercase text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600">
            Services
          </Link>
          <Link to="/contact" className="uppercase text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600">
            Contact
          </Link>
          
          <Link to="/about/me" className="uppercase text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600">
            About Me
          </Link>

          {user ? (
            <Link
              to="/login"
              onClick={logout}
              className="text-white bg-rose-600 px-4 py-1.5 rounded-full"
            >
              Sign out
            </Link>
          ) : (
            <>
              <Link to="/login" className="uppercase text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600">
                Login
              </Link>

              <Link
                to="/signup"
                className="text-white bg-rose-600 px-4 py-1.5 rounded-full"
              >
                Sign up
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
