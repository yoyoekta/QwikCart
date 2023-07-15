import React, { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import notify from "../components/Notification";
import { ToastContainer } from "react-toastify";

const EditProduct = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

    const getDetails = async () => {
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
            setQuantity(product.quantity);
            setDescription(product.description);
            setImage(product.image.secure_url);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDetails();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const itemName = e.target[0].value;
        const price = e.target[1].value;
        const quantity = e.target[2].value;
        const description = e.target[3].value;

        
        const url = process.env.REACT_APP_HOST + "/admin/edit/" + id;
        try {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    itemName: itemName,
                    description: description,
                    quantity: quantity,
                    price: price,
                    image: image,
                }),
            });

            const data = await res.json();
            console.log(data);
            if (res.status === 200) {
                notify("success", "Product edited successfully");
                setTimeout(() => {
                    navigate('/myproducts')
                }, 2000);
            }
            else{
                notify("error", "Product edit failed");
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
            <h1 className="text-4xl font-semibold">Edit Product</h1>
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
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
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
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="text"
                                placeholder="Enter quantity"
                                className="border-2 border-black rounded-lg p-2"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
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
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                            />
                        </div>
                    </div>

                    
                </div>
                
                <div className="flex space-x-2">
                    <button className="w-full bg-black text-white text-lg rounded-lg mt-6 p-3">Update Product</button>
                    <button className="w-full bg-black text-white text-lg rounded-lg mt-6 p-3">Cancel</button>
                </div>
            </form>
          </div>

          <div className="flex-1 basis-1/3 m-auto border rounded-lg cursor-pointer">
            <div className="p-4 m-2 flex flex-col space-y-4">
                <h3 className="text-3xl font-semibold">{itemName}</h3>
                <div className="flex flex-col justify-between items-center space-y-2">
                    <img src={image} alt="Product" className="rounded-lg object-cover"/>
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

export default EditProduct;
