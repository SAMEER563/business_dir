// BusinessDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io'


const businesses = [
  { id: 1, name: 'Restaurant A', category: 'Restaurants', description: 'Delicious food here.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 2, name: 'Tech Co.', category: 'Technology', description: 'Innovative tech solutions.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 3, name: 'Health Clinic', category: 'Health', description: 'Quality health services.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 4, name: 'Retail Shop', category: 'Retail', description: 'Amazing products at great prices.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 5, name: 'Entertainment Hub', category: 'Entertainment', description: 'Fun and games for all.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 6, name: 'Restaurant B', category: 'Restaurants', description: 'Exquisite dining experience.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
];


const BusinessDetails = () => {
  const { id } = useParams();  // Extract the business ID from the URL
  const business = businesses.find((b) => b.id === parseInt(id));  // Find the business by its ID

  if (!business) {
    return <p>Business not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <Link to='/businesses'>
            <IoMdArrowRoundBack className='m-2 text-2xl' />
          </Link>
      <img src={business.imgUrl} alt={business.name} className="w-full h-64 object-cover rounded-lg mt-10" />
      <h1 className="text-3xl font-bold mb-2 mt-6">{business.name}</h1>
      <p className="text-gray-700 text-lg mb-4">{business.description}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <p className="text-gray-500">Category: {business.category}</p>
      <p className="text-gray-500">Phone Number: {business.phoneNumber}</p>
      <p className="text-gray-500">Email: {business.email}</p>
      <p className="text-gray-500">Address: {business.address}</p>
      <p className="text-gray-500">City: {business.city}</p>
      <p className="text-gray-500">State: {business.state}</p>
      <p className="text-gray-500">Zip: {business.zip}</p>
        </div>
    </div>
    
  );
};

export default BusinessDetails;
