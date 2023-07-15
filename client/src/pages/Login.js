import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import { FaKey, FaUser } from "react-icons/fa6";
import { ToastContainer} from "react-toastify";
import notify from "../components/Notification";

const Login = () => {

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    const url = process.env.REACT_APP_HOST + "/auth/login";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      
      const response = await res.json();
      console.log(response);
      if(response.success ){
        notify("success", "Login Successful");
        localStorage.setItem("token", response.token);
        localStorage.setItem("user_id", response.foundUser._id);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
      else{
        notify("error", "Login Failed");
      }
    }
    catch (err) {
      console.log(err);
    }
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
      <ToastContainer />
    </div>
  );
};

export default Login;
