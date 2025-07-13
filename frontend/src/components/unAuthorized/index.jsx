import React from "react";
import { Link } from "react-router-dom"; // Optional, if using React Router

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">401</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Unauthorized Access</h2>
        <p className="text-gray-500 mb-6">You do not have permission to view this page.</p>
        <Link
          to="/login"
          className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-200"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;