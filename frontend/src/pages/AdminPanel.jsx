import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

const initialBusinesses = [
  { id: 1, name: 'Restaurant A', category: 'Restaurants', description: 'Delicious food here.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 2, name: 'Tech Co.', category: 'Technology', description: 'Innovative tech solutions.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 3, name: 'Health Clinic', category: 'Health', description: 'Quality health services.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 4, name: 'Retail Shop', category: 'Retail', description: 'Amazing products at great prices.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 5, name: 'Entertainment Hub', category: 'Entertainment', description: 'Fun and games for all.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
  { id: 6, name: 'Restaurant B', category: 'Restaurants', description: 'Exquisite dining experience.', phoneNumber: '123-456-7890', email: 'info@gmail.com', address: '123 Main St', city: 'City', state: 'State', zip: '12345', imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332_1280.jpg' },
];

// Define categories as an array
const categories = ['Restaurants', 'Technology', 'Retail', 'Healthcare', 'Education', 'Finance', 'Entertainment'];

// Set the app element for accessibility
Modal.setAppElement('#root');

const AdminPanel = () => {
  const [businesses, setBusinesses] = useState(initialBusinesses);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    category: '',
    description: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [businessToDelete, setBusinessToDelete] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddBusiness = () => {
    if (!formData.name || !formData.category || !formData.description || !formData.phoneNumber || !formData.address || !formData.city || !formData.state || !formData.zip) {
      toast.error("All fields are required.");
      return;
    }

    const newBusiness = {
      ...formData,
      id: businesses.length ? businesses[businesses.length - 1].id + 1 : 1
    };

    setBusinesses([...businesses, newBusiness]);
    setFormData({ id: null, name: '', category: '', description: '', phoneNumber: '', email: '', address: '', city: '', state: '', zip: '' });
  };

  const handleEditBusiness = (business) => {
    setFormData(business);
    setIsEditing(true);
  };

  const handleUpdateBusiness = () => {
    const updatedBusinesses = businesses.map(b => b.id === formData.id ? formData : b);
    setBusinesses(updatedBusinesses);
    setFormData({ id: null, name: '', category: '', description: '', phoneNumber: '', email: '', address: '', city: '', state: '', zip: '' });
    setIsEditing(false);
  };

  // Open delete confirmation modal
  const openModal = (id) => {
    setBusinessToDelete(id);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setBusinessToDelete(null);
  };

  // Confirm delete business
  const handleConfirmDelete = () => {
    const updatedBusinesses = businesses.filter(b => b.id !== businessToDelete);
    setBusinesses(updatedBusinesses);
    closeModal();
  };

  return (
    <div className="p-5 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-center">Admin Panel - Manage Businesses</h1>

      {/* Add/Edit Business Form */}
      <div className="mb-10">
        <h2 className="text-xl font-bold">{isEditing ? 'Edit Business' : 'Add New Business'}</h2>
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Business Name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {/* Category Select Dropdown */}
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Business Description"
            value={formData.description}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="Address"
            placeholder="Enter your address"
            value={formData.email}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="City"
            placeholder="Enter your City"
            value={formData.city}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="State"
            placeholder="Enter your State"
            value={formData.state}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="Zip"
            placeholder="Enter your Zip code"
            value={formData.zip}
            onChange={handleInputChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={isEditing ? handleUpdateBusiness : handleAddBusiness}
          className={`mt-4 p-2 ${isEditing ? 'bg-blue-500' : 'bg-green-500'} text-white rounded-md`}
        >
          {isEditing ? 'Update Business' : 'Add Business'}
        </button>
      </div>

      {/* Business List */}
      <h2 className="text-xl font-bold mb-4">Business List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">ID</th>
              <th className="border border-gray-200 p-2">Name</th>
              <th className="border border-gray-200 p-2">Category</th>
              <th className="border border-gray-200 p-2">Description</th>
              <th className="border border-gray-200 p-2">Phone Number</th>
              <th className="border border-gray-200 p-2">Email</th>
              <th className="border border-gray-200 p-2">Address</th>
              <th className="border border-gray-200 p-2">City</th>
              <th className="border border-gray-200 p-2">State</th>
              <th className="border border-gray-200 p-2">Zip</th>
              <th className="border border-gray-200 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map(business => (
              <tr key={business.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 p-2 text-center">{business.id}</td>
                <td className="border border-gray-200 p-2">{business.name}</td>
                <td className="border border-gray-200 p-2">{business.category}</td>
                <td className="border border-gray-200 p-2">{business.description}</td>
                <td className="border border-gray-200 p-2">{business.phoneNumber}</td>
                <td className="border border-gray-200 p-2">{business.email}</td>
                <td className="border border-gray-200 p-2">{business.address}</td>
                <td className="border border-gray-200 p-2">{business.city}</td>
                <td className="border border-gray-200 p-2">{business.state}</td>
                <td className="border border-gray-200 p-2">{business.zip}</td>
                <td className="border border-gray-200 p-2 flex flex-col md:flex-row md:justify-around">
                  <button
                    onClick={() => handleEditBusiness(business)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mb-1 md:mb-0 md:mr-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openModal(business.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white p-5 rounded shadow-md w-full sm:w-1/3 mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
        <p>Are you sure you want to delete this business?</p>
        <div className="flex justify-end mt-4">
          <button onClick={closeModal} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
          <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPanel;
