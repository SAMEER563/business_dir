import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending form data to a server)
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-500">Contact Us</h1>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Address</h2>
            <p className="text-gray-700">123 Business Street, Suite 100</p>
            <p className="text-gray-700">Business City, BC 12345</p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Phone</h2>
            <p className="text-gray-700">+1 (123) 456-7890</p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Email</h2>
            <p className="text-gray-700">info@businessdirectory.com</p>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            {submitted ? (
              <div className="text-green-500 text-center mb-4">Thank you for your message! We'll get back to you soon.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Message"
                    rows="5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
