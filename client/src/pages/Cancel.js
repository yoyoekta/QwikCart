import React from 'react'
import { Link } from 'react-router-dom';

const Cancel = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Payment Failed</h2>
                <p className="text-xl mb-4">
                We're sorry, but your payment could not be processed at this time. Please try again later or contact our support team for assistance.
                </p>
                <div className="flex justify-center space-x-4">
                <Link to="/" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-600">Go to Homepage</Link>
                <Link to="/cart" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-600">Return to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Cancel