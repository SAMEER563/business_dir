import React, { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useParams, useNavigate, Link } from 'react-router-dom';

// Hardcoded user data for demonstration
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, State, ZIP',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '123-456-7891',
    address: '456 Elm St, City, State, ZIP',
  },
  // More users can be added here
];

const EditUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const user = users.find((u) => u.id === parseInt(id)); // Find the user based on the ID
  const [formData, setFormData] = useState(user || {}); // Initialize state with user data
  const navigate = useNavigate();

  if (!user) {
    return <p>User not found.</p>; // If no user found with the given ID
  }

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Update form data state
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Logic to update the user goes here (e.g., API call)
    console.log('Updated user data:', formData); // For demonstration
    navigate('/admin/users'); // Navigate back to users list after submission
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Link to='/admin/users'>
            <IoMdArrowRoundBack className='m-2 text-2xl' />
          </Link>
        <h1 className="text-3xl font-bold text-center py-6">Edit User</h1>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email || ''}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone || ''}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address || ''}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/users')}
              className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
