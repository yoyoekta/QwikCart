import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import fetchProds from "../components/FetchProds";

const ProductsByCategory = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const hardProds = fetchProds(category);
  const categoryName = category[0].toUpperCase() + category.slice(1);

  const getProductsByCategory = async () => {
    const url = process.env.REACT_APP_HOST + "/home/category/" + category;
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCategoryProducts(data.catprods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsByCategory();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <BottomBar />
      <div>
        <div className="m-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {categoryName}
          </h2>
          <hr className="border-2 border-black" />
        </div>
        <div className="flex flex-wrap m-5 space-x-4">
          {hardProds.map((product, index) => {
            return (
              <div
                className="border border-slate-300 rounded-lg cursor-pointer"
                key={index}
              >
                <div className="p-4 m-2 flex flex-col space-y-2">
                  <h3 className="text-xl font-semibold">{product.itemName}</h3>
                  <img
                    src={product.image}
                    alt={product.itemName}
                    height={250}
                    width={250}
                  />
                  <p>Price: {product.price}</p>
                    <Link
                      to={`/product/hard/${category}/${product.id}`}
                      className="flex-1"
                    >
                      <button className="w-full bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">
                        View
                      </button>
                    </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap m-5 space-x-4">
          {categoryProducts.map((product, index) => {
            return (
              <div
                className="border border-slate-300 rounded-lg cursor-pointer"
                key={index}
              >
                <div className="p-4 m-2 flex flex-col space-y-2">
                  <h3 className="text-xl font-semibold">{product.itemName}</h3>
                  <img
                    src={product.image.secure_url}
                    alt={product.itemName}
                    height={250}
                    width={250}
                  />
                  <p>Price: {product.price}</p>
                  
                  <Link to={`/product/${product._id}`} className="flex-1">
                    <button className="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded w-full">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsByCategory;
