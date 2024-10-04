import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const categories = ['Restaurants', 'Retail', 'Services', 'Technology', 'Health', 'Entertainment'];

const AddBusiness = () => {
  const [businessData, setBusinessData] = useState({
    name: '',
    category: '',
    description: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imgUrl: ''
  });
  const [file, setFile] = useState(null);  // For handling file upload
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setBusinessData({
      ...businessData,
      [e.target.name]: e.target.value
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!businessData.name || !businessData.category || !businessData.description) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Process file upload and business data here (e.g., with a backend API)
    try {
      // Assuming there's an API to handle file upload and business creation:
      const formData = new FormData();
      formData.append('image', file);
      formData.append('data', JSON.stringify(businessData));

      // You would replace this fetch call with the actual API call
      // const response = await fetch('/api/business', {
      //   method: 'POST',
      //   body: formData
      // });

      // Mock response
      // const result = await response.json();
      toast.success('Business added successfully!');
      navigate('/admin'); // Redirect back to admin panel after success
    } catch (error) {
      toast.error('Failed to add business. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add New Business</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-bold mb-2">Business Name</label>
            <input
              type="text"
              name="name"
              value={businessData.name}
              onChange={handleChange}
              placeholder="Enter business name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-bold mb-2">Category</label>
            <select
              name="category"
              value={businessData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-bold mb-2">Description</label>
            <textarea
              name="description"
              value={businessData.description}
              onChange={handleChange}
              placeholder="Enter business description"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              rows="4"
              required
            />
          </div>

          <div>
            <label className="block font-bold mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={businessData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={businessData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={businessData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-2">City</label>
              <input
                type="text"
                name="city"
                value={businessData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">State</label>
              <input
                type="text"
                name="state"
                value={businessData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={businessData.zip}
                onChange={handleChange}
                placeholder="Enter ZIP code"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold mb-2">Upload Business Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-600 transition"
            >
              Add Business
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBusiness;
