import React from 'react'

const BottomBar = () => {
  return (
    <nav className="min-w-screen bg-black text-white">
            <div className="mx-5">
                <div className="relative flex items-center h-10">
                <div className="flex justify-between items-center w-full">
                    
                    <div className="flex space-x-4 items-center">
                        <div className="flex space-x-4">
                            All Products
                        </div>
                        <div className="flex space-x-4">
                            Electronics
                        </div>
                        <div className="flex space-x-4">
                            Clothing
                        </div>
                        <div className="flex space-x-4">
                            Household
                        </div>
                        <div className="flex space-x-4">
                            Art &amp; Crafts
                        </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-row space-x-4">
                        Search
                    </div>
                </div>
                </div>
            </div>
        </nav>
  )
}

export default BottomBar