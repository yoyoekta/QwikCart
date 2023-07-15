import React, { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import fetchProds from "../components/FetchProds";

const ProductView = () => {

    const { category, id } = useParams()
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const getItem = async () => {
        const item = fetchProds(category)[id]
        setItemName(item.itemName);
        setPrice(item.price);
        setDescription(item.description);
        setImage(item.image);
    }

    useEffect(() => {
        getItem();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <BottomBar />
        <div className="m-10">
            <div className="flex flex-row justify-between space-x-12 p-8">
                <div className="flex-1 flex flex-col space-y-4 mx-5 items-center">
                    <img src={image} alt="Product Image" className="object-fit"/>
                </div>

                <div className="h-full flex-1">
                    <div className="p-4 m-2 flex flex-col justify-between space-y-8">
                        <h3 className="text-4xl font-black">{itemName}</h3>
                        <p className="text-lg">{description}</p>
                        <h4 className="text-xl font-semibold">Price Rs. {price}</h4>
                        <div className="flex flex-row justify-center items-center bg-black text-white rounded-lg cursor-pointer">
                            <p className="p-4 font-medium">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductView;
