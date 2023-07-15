import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BottomBar from '../components/BottomBar'
import { Link } from 'react-router-dom'
import fetchProds from '../components/FetchProds'

const AllProducts = () => {

    const [Products, setProducts] = useState([])
    const hardProds = fetchProds("all")

    const getProducts = async () => {
        const url = process.env.REACT_APP_HOST + "/home/allProds"
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json()
            console.log(data.allProducts)
            setProducts(data.allProducts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
            <Navbar />
            <BottomBar />
            <div>
                <div className='m-5'>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">All Products</h2>
                    <hr className="border-2 border-black" />
                </div>
                
                <div className="flex flex-wrap m-5 space-x-4">
                    {Products.map((product, index) => {
                        return (
                            <div className="border border-slate-300 rounded-lg cursor-pointer" key={index}>
                                <div className='p-4 m-2 flex flex-col space-y-3'>
                                    <h3 className='text-xl font-semibold'>{product.itemName}</h3>
                                    <img src={product.image.secure_url} alt={product.itemName} height={250} width={250}/>
                                    <p>Price: {product.price}</p>
                                    <div className='flex space-x-2'>
                                        <button className="flex-1 bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">Add to Cart</button>
                                        <Link to={`/product/${product._id}`}><button className="flex-1 bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">View</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default AllProducts