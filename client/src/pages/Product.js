import React, { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import notify from "../components/Notification";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductById = () => {

    const { id } = useParams()
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);

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

    const addToCart = (itemName, price, image) => {
        const cartItems = localStorage.getItem("cartItems") === "null" ? [] : JSON.parse(localStorage.getItem("cartItems")) || []
        localStorage.setItem(
          "cartItems", JSON.stringify([...cartItems,{itemName, price, image, quantity: 1 }]))
    
        console.log(localStorage.getItem("cartItems"))
        notify("success", "Item added to cart");
        setQuantity(1);
        setShow(true)
      };

    const onPlusClick = () => {
        const Items = localStorage.getItem("cartItems")
        const arr = JSON.parse(Items)
        const index = arr.findIndex((item) => item.itemName === itemName)
        arr[index].quantity = arr[index].quantity+1
        localStorage.setItem("cartItems", JSON.stringify(arr))
        setQuantity(quantity+1);
        notify("success", "Item added to cart")
    }

    const onMinusClick = () => {
        const Items = localStorage.getItem("cartItems")
        const arr = JSON.parse(Items)
        const index = arr.findIndex((item) => item.itemName === itemName)
        arr[index].quantity = arr[index].quantity-1
        localStorage.setItem("cartItems", JSON.stringify(arr))
        if(quantity === 1) {
            arr.splice(index, 1)
            localStorage.setItem("cartItems", JSON.stringify(arr))
            setShow(false)
            return
        }
        setQuantity(quantity-1);
        notify("success", "Item removed from cart")
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
                        { show ? (
                            <div className="flex flex-row space-x-4 items-center">
                                <div className="w-8 h-8 flex items-center justify-center border rounded-lg"><FaMinus className="cursor-pointer" onClick={onMinusClick}/></div>
                                <div className="flex flex-col">
                                <div className="text-xl font-semibold">{quantity}</div>
                                </div>
                                <div className="w-8 h-8 flex items-center justify-center border rounded-lg"><FaPlus className="cursor-pointer" onClick={onPlusClick}/></div>
                            </div>
                        ) : (
                            <div className="flex flex-row justify-center items-center bg-black text-white rounded-lg cursor-pointer" onClick={addToCart}>
                                <p className="p-4 font-medium">Add to Cart</p>
                            </div>    
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default ProductById;
