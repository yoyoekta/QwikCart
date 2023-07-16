import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {

  localStorage.removeItem('cartItems')
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Payment Successful</h2>
        <p className="text-xl mb-4">
          Thank you for your purchase! Your payment has been successfully processed.
        </p>
        <div className="flex justify-center">
          <Link to="/" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-600">Go to Homepage</Link>
        </div>
      </div>
    </div>
  )
}

export default Success