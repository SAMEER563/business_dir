import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io'

// Hardcoded business data for demonstration
const businesses = [
  {
    id: 1,
    name: 'Restaurant A',
    category: 'Restaurants',
    description: 'Delicious food with a great ambiance.',
    phoneNumber: '123-456-7890',
    email: 'info@restauranta.com',
    address: '123 Main St, City, State, ZIP',
    city: 'City',
    state: 'State',
    zip: '12345',
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg',
  },
  {
    id: 2,
    name: 'Tech Solutions',
    category: 'Technology',
    description: 'Innovative technology solutions for businesses.',
    phoneNumber: '123-456-7891',
    email: 'info@techsolutions.com',
    address: '456 Elm St, City, State, ZIP',
    city: 'City',
    state: 'State',
    zip: '12345',
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg',
  },
  {
    id: 3,
    name: 'Retail Shop',
    category: 'Retail',
    description: 'Best retail products available here.',
    phoneNumber: '123-456-7892',
    email: 'info@retailshop.com',
    address: '789 Oak St, City, State, ZIP',
    city: 'City',
    state: 'State',
    zip: '12345',
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg',
  },
];

const BusinessDetails = () => {
  const { id } = useParams(); // Retrieve the ID from the URL
  const business = businesses.find((b) => b.id === parseInt(id)); // Find the business by ID
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const navigate = useNavigate();

  if (!business) {
    return <p>Business not found.</p>; // If no business found with the given ID
  }

  const handleDelete = () => {
    // Logic to delete the business
    navigate('/admin/businesses'); // For demonstration, navigate back to businesses page
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Link to='/admin/businesses'>
            <IoMdArrowRoundBack className='m-2 text-2xl' />
          </Link>
        <img
          src={business.imgUrl}
          alt={business.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{business.name}</h1>
          <p className="text-gray-600 mb-2">
            <strong>Category: </strong>{business.category}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Description: </strong>{business.description}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Address: </strong>{business.address}, {business.city}, {business.state} {business.zip}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone: </strong>{business.phoneNumber}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Email: </strong>{business.email}
          </p>

          <div className="flex justify-between gap-2">
           
            <Link
              to={`/admin/edit-business/${business.id}`}
              className="bg-blue-500 text-white px-2 md:px-4 py-2 rounded-lg"
            >
              Edit Business
            </Link>
            <button
              onClick={() => setShowDeletePopup(true)}
              className="bg-red-500 text-white px-2 md:px-4  py-2 rounded-lg"
            >
              Delete Business
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md w-full transform transition-transform duration-300 ease-in-out scale-95">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Are you sure?</h2>
            <p className="text-gray-700 mb-6">Do you really want to delete <strong>{business.name}</strong>? This process cannot be undone.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeletePopup(false)}
                className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessDetails;
