// Import dependencies
import express from "express";
import businessModel from "../models/businessModel.js";

// Route for creating a new business
const createBusiness = async (req, res) => {
  try {
    // Destructure the required fields from req.body
    const {
      name,
      description,
      category,
      image,
      address,
      city,
      state,
      zip,
      phone,
      email,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !category ||
      !address ||
      !city ||
      !state ||
      !zip ||
      !phone ||
      !email
    ) {
      return res
        .status(400)
        .json({
          success: false,
          message: "All required fields must be filled.",
        });
    }

    // check if phone is already in use
    const phoneExists = await businessModel.findOne({ phone });
    if (phoneExists) {
      return res
        .status(400)
        .json({ success: false, message: "Phone already exists." });
    }

    // check if email is already in use
    const emailExists = await businessModel.findOne({ email });
    if (emailExists) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists." });
    }

    // Create business data object
    const businessData = {
      name,
      description,
      category,
      image,
      address,
      city,
      state,
      zip,
      phone,
      email,
    };

    console.log(businessData);

    // Save the business to the database
    const business = new businessModel(businessData);
    await business.save();

    // Respond with success
    res
      .status(201)
      .json({ success: true, message: "Business created successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Route for update business

const updateBusiness = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { name, description, category, image, address, city, state, zip, phone, email } = req.body;
        const business = await businessModel.findById(id);
        if (business) {
            business.name = name;
            business.description = description;
            business.category = category;
            business.image = image;
            business.address = address;
            business.city = city;
            business.state = state;
            business.zip = zip;
            business.phone = phone;
            business.email = email;

            const updatedBusiness = await business.save();
            res.json({success: true, message: 'Business updated successfully',updatedBusiness});
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// Route for delete business
 
const deleteBusiness = async (req, res) => {
    try {
        const { id } = req.params;
        const business = await businessModel.findByIdAndDelete(id);
        if (business) {
           
            res.json({ message: 'Business deleted successfully' });
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}






// Route for getting all businesses
const getBusinesses = async (req, res) => {
  try {
    const businesses = await businessModel.find();
    res.json(businesses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get  business by name
const getBusinessByName = async (req, res) => {
  try {
    const { name } = req.params;

    // Check if the search query has at least 3 characters
    if (name.length < 3) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please enter at least 3 characters for the search.",
        });
    }

    // Create a case-insensitive regex to search for businesses by name
    const regex = new RegExp(name, "i"); // 'i' makes it case-insensitive

    // Find all businesses whose name matches the regex
    const businesses = await businessModel.find({ name: { $regex: regex } });

    // If no businesses found, return a not found message
    if (businesses.length === 0) {
      return res
        .status(404)
        .json({
          success: false,
          message: "No businesses found with that name.",
        });
    }

    // Return the matched businesses
    res.json(businesses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { createBusiness, getBusinesses, getBusinessByName, updateBusiness, deleteBusiness };
