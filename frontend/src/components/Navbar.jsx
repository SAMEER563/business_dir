import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu open/close

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar
  const location = useLocation(); // Hook to get current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar open/close
  };

  const isActive = (path) => location.pathname === path; // Check if the path is active

  return (
    <div className="flex items-center py-2 px-[4%] justify-between bg-white shadow-md">
      
      {/* Logo */}
      <Link to="/" className="w-[max(70px)]">
        <img 
          src="https://img.freepik.com/premium-vector/colorful-bird-gradient-logotype-vector-illustration_1253202-57495.jpg?semt=ais_hybrid" 
          alt="Logo" 
        />
      </Link>

      {/* Hamburger icon (visible on small screens) */}
      <div className="md:hidden">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Links for large screens */}
      <div className="hidden md:flex gap-4 font-bold">
        <Link to='/' className={isActive('/') ? 'text-purple-500' : ''}>Home</Link>
        <Link to='/businesses' className={isActive('/businesses') ? 'text-purple-500' : ''}>Businesses</Link>
        <Link to='/about' className={isActive('/about') ? 'text-purple-500' : ''}>About</Link>
        <Link to='/contact' className={isActive('/contact') ? 'text-purple-500' : ''}>Contact</Link>
        <Link to='/admin' className={isActive('/admin') ? 'text-purple-500' : ''}>Admin</Link>
      </div>

      {/* Login/Register buttons (large screens) */}
      <div className="hidden md:flex">
        <Link to="/login" className="bg-purple-500 text-white px-4 py-2 rounded-full">Login</Link>
        <Link to="/register" className="bg-purple-500 text-white px-4 py-2 rounded-full ml-4">Register</Link>
      </div>

      {/* Sidebar for small screens */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg w-2/3 z-50 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 gap-4">
          <Link to='/' onClick={toggleSidebar} className={`font-bold ${isActive('/') ? 'text-purple-500' : 'text-gray-700'}`}>Home</Link>
          <Link to='/businesses' onClick={toggleSidebar} className={`font-bold ${isActive('/businesses') ? 'text-purple-500' : 'text-gray-700'}`}>Businesses</Link>
          <Link to='/about' onClick={toggleSidebar} className={`font-bold ${isActive('/about') ? 'text-purple-500' : 'text-gray-700'}`}>About</Link>
          <Link to='/contact' onClick={toggleSidebar} className={`font-bold ${isActive('/contact') ? 'text-purple-500' : 'text-gray-700'}`}>Contact</Link>
          <Link to='/admin' onClick={toggleSidebar} className={`font-bold ${isActive('/admin') ? 'text-purple-500' : 'text-gray-700'}`}>Admin</Link>
          <div className="mt-4">
            <Link to="/login" onClick={toggleSidebar} className="block bg-purple-500 text-white px-4 py-2 rounded-full text-center">Login</Link>
            <Link to="/register" onClick={toggleSidebar} className="block bg-purple-500 text-white px-4 py-2 rounded-full mt-2 text-center">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
