import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user'); // Default role as 'user'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault();

    // Basic validation (you can add more)
    if (!name || !email) {
      setError('Please fill in all required fields.');
      return;
    }

    // Simulate adding the user to a database
    const newUser = { id: Date.now(), name, email, role };
    console.log('User added:', newUser);

    // Clear form after adding
    setName('');
    setEmail('');
    setRole('user');
    setError('');

    // Redirect to the user list page after adding the user
    navigate('/admin/users');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New User</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleAddUser}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter user name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter user email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 mb-2">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
