import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import notify from "../components/Notification";
import { ToastContainer } from "react-toastify";

const AddProduct = () => {

    const [image, setImage] = useState("");
    const [itemName, setName] = useState("Product Name appears here");
    const [price, setprice] = useState("0");

    const navigate = useNavigate();

    console.log(localStorage.getItem("user_id"))

  const handleSubmit = async (e) => {
    e.preventDefault();

    const seller = e.target[1].value;
    const category = e.target[2].value;
    const description = e.target[3].value;
    const quantity = e.target[6].value;

    const url = process.env.REACT_APP_HOST + "/admin/createItem";

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                itemName: itemName,
                description: description,
                category: category,
                quantity: quantity,
                price: price,
                image: image,
                seller: seller,
                user: localStorage.getItem("user_id"),
            }),
        });

        if(res.status === 200){
            notify("success", "Product Added Successfully");
            setTimeout(() => {
                navigate('/myproducts')
            }, 2000);
        }
        else{
            notify("error", "Product Addition Failed");
        }

    } catch (err) {
        console.log(err);
    }
    
  };

    const onImageChange = (e) => {
        const file = e.target.files[0]
        Transform(file)
    };

    const Transform = (file) => {
        const reader = new FileReader()

        if(file) {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setImage(reader.result)
            }
        }
    }

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <BottomBar />
      <div className="m-10">
        <div className="flex flex-row justify-between space-x-12 p-8">
          <div className="flex-1 basis-2/3 flex flex-col space-y-4 mx-5">
            <h1 className="text-4xl font-semibold">Add Product</h1>
            <hr className="border-2 border-black" />
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between space-x-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="ProductName">Product Name</label>
                            <input
                                type="text"
                                placeholder="Enter product name"
                                className="border-2 border-black rounded-lg p-2"
                                onChange={(e) => {setName(e.target.value)}}
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="SellerName">Seller Name</label>
                            <input
                                type="text"
                                placeholder="Enter seller name"
                                className="border-2 border-black rounded-lg p-2"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="ProductCategory">Product Category</label>
                            <select className="border-2 border-black rounded-lg p-2" required>
                                <option value="none" selected disabled hidden>Select an Option</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="household">Household</option>
                                <option value="arts">Art & Craft</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="ProductDesc">Product Description</label>
                            <textarea
                                type="text"
                                placeholder="Enter product description"
                                rows={5}
                                className="border-2 border-black rounded-lg p-2"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="ProductImage">Product Image</label>
                            <input
                                type="file"
                                className="border-2 border-black rounded-lg p-2"
                                onChange={onImageChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-between space-x-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="ProductPrice">Product Price</label>
                            <input
                                type="text"
                                placeholder="Enter product price"
                                className="border-2 border-black rounded-lg p-2"
                                onChange={(e) => {setprice(e.target.value)}}
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="text"
                                placeholder="Enter quantity"
                                className="border-2 border-black rounded-lg p-2"
                            />
                        </div>
                    </div>
                </div>
                
                <button className="w-full bg-black text-white text-lg rounded-lg mt-6 p-3">Add Product</button>
            </form>
          </div>

          <div className="flex-1 basis-1/3 m-auto border rounded-lg cursor-pointer">
            <div className="p-4 m-2 flex flex-col space-y-4">
                <h3 className="text-3xl font-semibold">{itemName}</h3>
                <div className="flex flex-col justify-between items-center space-y-2">
                    {
                        image ? (<img src={image} alt="Product" className="rounded-lg object-cover"/>) :
                        (<p className="text-xl font-semibold text-slate-500 p-4 m-4">Image will appear here.</p>)
                    }
                    
                </div>
                <div className="flex justify-between my-4">
                    <div>Price</div>
                    <div>Rs. {price}</div>
                </div>

                <div className="flex flex-row justify-center items-center bg-black text-white rounded-lg">
                    <p className="p-4 font-medium">Add to Cart</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
