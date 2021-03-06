import React, { useRef } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo/logo-1.png";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import auth from "../../Firebase/Firebase.init";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, createError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    console.log(name, email, password, confirmPassword);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    // navigate("/");
    navigate(from, { replace: true });
  };

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };

  if (loading || updating || googleLoading) {
    return <Loading></Loading>;
  }

  if (user || googleUser) {
    // navigate(from, { replace: true });
    console.log(user);
  }
  let errorElement;
  if (createError || updateError || googleError) {
    console.error(createError || updateError || googleError);
    errorElement = (
      <p className="text-red-600 font-medium pb-4">
        {createError?.message || updateError?.message || googleError.message}
      </p>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="text-center  w-[500px] pb-7 mx-auto">
        <div>
          <div className="my-4">
            <img src={logo} alt="" className="h-20 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-rose-600 mb-5 capitalize">
            Sign Up
          </h2>
          <form onSubmit={handleSignUp}>
            <input
              id="name"
              ref={nameRef}
              className="focus:ring-gray-300  focus:ring-2 focus:bg-white w-4/5  bg-gray-100 border-0 shadow rounded-lg px-4 py-3 mb-5"
              type="text"
              placeholder="Name"
            />
            <input
              id="email"
              ref={emailRef}
              className="focus:ring-gray-300  focus:ring-2 focus:bg-white w-4/5  bg-gray-100 border-0 shadow rounded-lg px-4 py-3 mb-5"
              type="email"
              placeholder="Email"
              required
            />
            <input
              id="password"
              ref={passwordRef}
              className="focus:ring-gray-300  focus:ring-2 focus:bg-white w-4/5  bg-gray-100 border-0 shadow  rounded-lg px-4 py-3 mb-5"
              type="password"
              placeholder="Password"
              required
            />
            <input
              id="confirm-password"
              ref={confirmPasswordRef}
              className="focus:ring-gray-300  focus:ring-2 focus:bg-white  w-4/5  bg-gray-100 border-0 shadow  rounded-lg px-4 py-3 mb-5"
              type="password"
              placeholder="Confirm Password"
              required
            />
            <button
              id="signup-button"
              type="submit"
              className="w-4/5 font-medium text-white bg-rose-600 uppercase block  shadow-sm rounded-lg px-6 py-3 mb-3 mx-auto"
            >
              Sign Up
            </button>
            {errorElement}
          </form>

          <p>
            Already Have An Account?{" "}
            <Link to="/login">
              <span className="text-rose-600">Login</span>
            </Link>
          </p>
        </div>
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
          <button onClick={handleGoogleLogin} className="text-2xl">
            <FcGoogle></FcGoogle>
          </button>
          <button className="text-2xl">
            <BsGithub></BsGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
