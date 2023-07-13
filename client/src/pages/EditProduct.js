import React from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import electronics from "../images/electronics.jpg";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

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

                    <div className="flex flex-col space-y-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="ProductDesc">Product Description</label>
                            <textarea
                                type="text"
                                placeholder="Enter product description"
                                rows={5}
                                className="border-2 border-black rounded-lg p-2"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="ProductImage">Product Image</label>
                            <input
                                type="file"
                                className="border-2 border-black rounded-lg p-2"
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
                <h3 className="text-3xl font-semibold">Product Name</h3>
                <div className="flex flex-col justify-between items-center space-y-2">
                    <img src={electronics} alt="Product" className="rounded-lg object-cover"/>
                </div>
                <div className="flex justify-between my-4">
                    <div>Price</div>
                    <div>Rs. 200</div>
                </div>

                <div className="flex flex-row justify-center items-center bg-black text-white rounded-lg">
                    <p className="p-4 font-medium">Add to Cart</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
