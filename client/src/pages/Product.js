import React, { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProductById = () => {

    const { id } = useParams()
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const getItem = async () => {
        try {
            const url = process.env.REACT_APP_HOST + "/home/product/" + id;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            console.log(data);
            const product = data.product;
            setItemName(product.itemName);
            setPrice(product.price);
            setDescription(product.description);
            setImage(product.image.secure_url);
        }

        catch (err) {
            console.log(err);
        }
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

export default ProductById;
