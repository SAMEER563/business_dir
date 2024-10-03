import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Default to 'user'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., API call
    alert(`Logging in as ${userType} with username: ${username}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="block mb-1 font-bold">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          {/* User Type Selection */}
          <div className="mb-4">
            <label className="block mb-1 font-bold">Login as:</label>
            <div className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="admin"
                checked={userType === 'admin'}
                onChange={(e) => setUserType(e.target.value)}
                className="mr-2"
              />
              <label className="mr-4">Admin</label>
              <input
                type="radio"
                name="userType"
                value="user"
                checked={userType === 'user'}
                onChange={(e) => setUserType(e.target.value)}
                className="mr-2"
              />
              <label>User</label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <div>
            <p className="mt-4">Don't have an account? <a href="/register" className="text-blue-500">Register here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
