import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import Card from '../components/Card';

const categories = ['All', 'Restaurants', 'Retail', 'Services', 'Technology', 'Health', 'Entertainment'];
const businesses = [
  { id: 1, name: 'Restaurant A', category: 'Restaurants', description: 'Delicious food here.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 2, name: 'Tech Co.', category: 'Technology', description: 'Innovative tech solutions.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 3, name: 'Health Clinic', category: 'Health', description: 'Quality health services.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 4, name: 'Retail Shop', category: 'Retail', description: 'Amazing products at great prices.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 5, name: 'Entertainment Hub', category: 'Entertainment', description: 'Fun and games for all.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 6, name: 'Restaurant B', category: 'Restaurants', description: 'Exquisite dining experience.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
];

const Businesses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();  // Hook to navigate to other routes

  const filteredBusinesses = selectedCategory === 'All'
    ? businesses
    : businesses.filter((business) => business.category === selectedCategory);

  const handleBusinessClick = (id) => {
    navigate(`/business/${id}`);  // Navigate to the business details page
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-1/4 p-5 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left px-4 py-2 rounded-lg ${
                  selectedCategory === category ? 'bg-purple-500 text-white' : 'bg-white text-gray-800'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown for smaller screens */}
      <div className="block md:hidden p-5 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 border"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Business Cards Section */}
      <div className="w-full md:w-3/4 p-5">
        <h2 className="text-2xl font-bold mb-6">Businesses in {selectedCategory}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((business) => (
              <div key={business.id} onClick={() => handleBusinessClick(business.id)} className="cursor-pointer">
                <Card
                  name={business.name}
                  description={business.description}
                  imgUrl={business.imgUrl}
                />
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

export default Businesses;
