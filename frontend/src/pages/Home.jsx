import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';  // Importing Card component

// Dummy categories and businesses data (similar to Businesses.js)
const categories = ['All', 'Restaurants', 'Retail', 'Services', 'Technology', 'Health', 'Entertainment'];
const businesses = [
  { id: 1, name: 'Restaurant A', category: 'Restaurants', description: 'Delicious food here.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 2, name: 'Tech Co.', category: 'Technology', description: 'Innovative tech solutions.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 3, name: 'Health Clinic', category: 'Health', description: 'Quality health services.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 4, name: 'Retail Shop', category: 'Retail', description: 'Amazing products at great prices.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 5, name: 'Entertainment Hub', category: 'Entertainment', description: 'Fun and games for all.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 6, name: 'Restaurant B', category: 'Restaurants', description: 'Exquisite dining experience.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');  // Category filter state
  const navigate = useNavigate();  // Hook to navigate between pages

  // Filter businesses by selected category
  const filteredBusinesses = selectedCategory === 'All'
    ? businesses
    : businesses.filter((business) => business.category === selectedCategory);

  // Handle card click to navigate to business details
  const handleBusinessClick = (id) => {
    navigate(`/business/${id}`);  // Redirect to business details page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50"> {/* Center content and background */}
      <div className="w-full max-w-screen-lg mx-auto text-center"> {/* Limit max width */}
        
        {/* Header Section */}
        <div className="flex flex-col gap-5 my-10">
          <span className="m-auto px-4 py-2 rounded-full bg-gray-100 text-red-500 font-medium">
            No.1 Business Directory Website
          </span>
          <h1 className="text-5xl font-bold">
            Search & <br /> Get Your <span className="text-purple-500">Nearby Business</span>
          </h1>
          <p>This is the first page that users will see when they visit the website. It contains a search bar to search for businesses.</p>
          
          {/* Search Bar */}
          <div className="flex w-[90%] md:w-[60%] lg:w-[40%] shadow-lg border border-gray-100 pl-3 rounded-full items-center gap-4 mx-auto">
            <input 
              type="text" 
              placeholder="Search Your Required Business" 
              className="w-full py-2 border-none outline-none"
              aria-label="Search for businesses"
            />
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full" aria-label="Search Button">
              Search
            </button>
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="mb-6">
          {/* Dropdown for small screens */}
          <div className="block md:hidden">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)} 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 w-full"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Button group for larger screens */}
          <div className="hidden md:flex justify-center">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`mx-2 px-4 py-2 rounded-full font-medium ${
                  selectedCategory === category ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* --------- Card Section --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 cursor-pointer">
          {filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((business) => (
              <div 
                key={business.id} 
                onClick={() => handleBusinessClick(business.id)} 
                className="cursor-pointer"
              >
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

export default Home;
