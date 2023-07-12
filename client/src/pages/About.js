import React from "react";
import { useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";

const Drop = ({ title, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="border rounded shadow-sm">
      <button
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setShow(!show)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 32 32"
            className={`w-3 text-gray-600 transition-transform duration-200 ${show && 'transform rotate-180'}`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              points="28.5,11.5 16,24 3.5,11.5 "
            />
          </svg>
        </div>
      </button>
      {show && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <BottomBar />

      <div className="max-w-7xl mx-auto my-12 flex flex-col space-y-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black text-[50px] text-center m-5 leading-11 mb-2 bg-clip-text ">
            QwikCart
          </h1>
          <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
            It is an e-commerce application that allows users to buy and sell
            products.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Drop title={"Features"}>
            <ul className="flex flex-col justify-around mx-4 list-disc">
              <li>Users can buy and sell products</li>
              <li>Users can add products to their cart</li>
              <li>Users can checkout their cart</li>
            </ul>
          </Drop>
          <Drop title={"Tech Stack Used"}>
              <ul className="flex flex-col justify-around mx-4 list-disc">
                  <li>React</li>
                  <li>Mongoose</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Tailwind CSS</li>
              </ul>
          </Drop>
        </div>
      </div>
    </div>
  );
};

export default About;
