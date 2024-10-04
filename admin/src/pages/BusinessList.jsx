import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Restaurants', 'Technology', 'Retail'];

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

const BusinessList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBusinesses =
    selectedCategory === 'All'
      ? businesses
      : businesses.filter((business) => business.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar for category filter */}
      <div className="w-full md:w-1/4 p-5 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Filter by Category</h2>

        {/* Dropdown for small screens */}
        <div className="md:hidden mb-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons for larger screens */}
        <ul className="hidden md:block space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Business List */}
      <div className="w-full md:w-3/4 p-5">
        <h2 className="text-2xl font-bold mb-6">Businesses in {selectedCategory}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((business) => (
              <div key={business.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={business.imgUrl}
                  alt={business.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{business.name}</h3>
                <p className="text-gray-600 mb-2">{business.description}</p>
                <p className="text-gray-600 mb-4">{business.phoneNumber}</p>
                <Link
                  to={`/business/${business.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p>No businesses found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessList;
