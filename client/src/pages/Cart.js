import React from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { FaAngleRight, FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <BottomBar />
      <div className="m-10">
        <div className="flex flex-row justify-between space-x-12 p-8">
          <div className="flex-1 basis-2/3 flex flex-col space-y-4 mx-5">
            <h1 className="text-4xl font-semibold">Your Cart</h1>
            <hr className="border-2 border-black" />
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row justify-between items-center border-b-2 px-4 py-4">
                <div className="flex flex-row space-x-4 items-center">
                  <div className="w-16 h-16 bg-black rounded-lg"></div>
                  <div className="flex flex-col">
                    <div className="text-xl font-semibold">Product 1</div>
                    <div className="text-sm">Rs. 100</div>
                  </div>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                  <div className="flex flex-row space-x-4 items-center">
                    <div className="w-8 h-8 flex items-center justify-center border rounded-lg"><FaPlus /></div>
                    <div className="flex flex-col">
                      <div className="text-xl font-semibold">1</div>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center border rounded-lg"><FaMinus /></div>
                  </div>
                  <div className="flex flex-row space-x-4 items-center">
                    <div className="flex mx-5 space-x-4">
                      <div className="text-3xl font-semibold"><FaRegTrashCan /></div>
                      <div className="text-3xl font-semibold"><FaAngleRight /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-1/3 border rounded-lg cursor-pointer bg-black text-white">
            <div className="p-4 m-2 flex flex-col space-y-2">
              <h3 className="text-3xl font-semibold">Cart Total</h3>
              <div className="flex flex-col justify-between space-y-2">
                <div className="flex justify-between my-4">
                  <div>Subtotal</div>
                  <div>Rs. 200</div>
                </div>
                <hr />
                <div className="flex flex-col justify-between py-2 space-y-2">
                  <div className="flex justify-between">
                    <div>Tax</div>
                    <div>Rs. 0</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Shipping</div>
                    <div>Rs. 50</div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between py-2">
                  <div>Total</div>
                  <div>Rs. 250</div>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center bg-white text-black rounded-lg">
                <p className="p-4 font-medium">Continue to Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
