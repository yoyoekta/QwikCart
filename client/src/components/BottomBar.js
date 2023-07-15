import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomBar = () => {
  return (
    <nav className="min-w-screen bg-black text-white">
            <div className="mx-5">
                <div className="relative flex items-center h-12">
                    <div className="flex justify-between items-center w-full">
                        
                        <div className="flex items-center">
                            <NavLink to="/allproducts" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                All Products
                            </NavLink>
                            <NavLink to="/products/electronics" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                Electronics
                            </NavLink>
                            <NavLink to="/products/clothing" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                Clothing
                            </NavLink>
                            <NavLink to="/products/household" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                Household
                            </NavLink>
                            <NavLink to="/products/art & crafts" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                Art &amp; Crafts
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default BottomBar