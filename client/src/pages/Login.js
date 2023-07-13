import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import { FaKey, FaUser } from "react-icons/fa6";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <div>
      <Navbar />
      <BottomBar />
      <div className="max-w-sm mx-auto">
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="font-black text-[50px] text-center leading-11 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-black to-slate-500 ">
            Login
          </h1>
          <form
            className="flex flex-col space-y-4 min-w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-lg p-2 bg-inherit">
                    <FaUser className="text-slate-500"/>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full outline-none"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-lg p-2 bg-inherit">
                    <FaKey className="text-slate-500"/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full outline-none"
                        required
                    />
                </div>
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign In with Email
            </button>
          </form>
          <Link to="/register" className="text-gray-500">
            Don't have an account? Register here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
