import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo/logo-1.png";


import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Shared/Loading/Loading";
import auth from "../../Firebase/Firebase.init";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, passwordResetError] =
    useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      if (passwordResetError || signInError || sending) {
        toast(passwordResetError.message);
      } else {
        toast("Sent email");
      }
    } else {
      toast("Please enter your email address");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (signInError || passwordResetError) {
    console.error(signInError || passwordResetError);
    errorElement = (
      <p className="text-red-600 font-medium pb-4">
        {signInError?.message || passwordResetError?.message}
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
            Log In
          </h2>
          <form onSubmit={handleLogin}>
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
              className="focus:ring-gray-300  focus:ring-2 focus:bg-white w-4/5  bg-gray-100 border-0 shadow rounded-lg px-4 py-3 mb-5"
              type="password"
              placeholder="Password"
              required
            />
            <button
              id="login-button"
              type="submit"
              className="w-4/5 font-medium text-white bg-rose-600 uppercase block shadow-gray-400 shadow-sm rounded-lg px-6 py-3 mb-3 mx-auto"
            >
              Log in
            </button>
          </form>
          {errorElement}
          <p>
            New to Tutor Guru?{" "}
            <Link to="/signup">
              <span className="text-rose-600">Create An Account</span>
            </Link>
          </p>
          <p>
            Forget Password?{" "}
            <button onClick={resetPassword} className="text-rose-600">
              Reset Password
            </button>
          </p>
        </div>
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
