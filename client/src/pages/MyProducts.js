import React from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { FaAngleRight, FaPen, FaRegTrashCan } from "react-icons/fa6";

const Cart = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <BottomBar />
        <div className="m-10">
            <div className="flex flex-row justify-between space-x-12 p-8">
            <div className="flex-1 basis-2/3 flex flex-col space-y-4 mx-5">
                <h1 className="text-4xl font-semibold">My Products</h1>
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
                        <div className="flex flex-col">
                        <div className="text-2xl font-semibold"><FaPen /></div>
                        </div>
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
            </div>
        </div>
    </div>
    );
};

export default Cart;
