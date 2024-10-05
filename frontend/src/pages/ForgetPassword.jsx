import React from 'react';

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Forgot your password?
        </h1>
        <p className="mt-2 text-lg md:text-xl text-gray-600">
          No worries, we'll send you reset instructions.
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <form className="flex flex-col">
          {/* Email Input */}
          <label className="text-left text-gray-700 font-semibold mb-2">
            Enter your email
          </label>
          <input 
            type="email" 
            className="p-4 border rounded-md w-full border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder="you@example.com" 
            required 
          />
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="mt-6 bg-purple-500 hover:bg-purple-600 text-white text-lg font-semibold py-3 rounded-md transition duration-300 ease-in-out"
          >
            Send Reset Instructions
          </button>
        </form>
      </div>

      {/* Instruction Section */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600">
          It's quick and easy to reset your password.
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
