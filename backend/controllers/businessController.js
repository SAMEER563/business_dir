import express from 'express';
import businessModel from '../models/businessModel.js';

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
            email 
        } = req.body;

        // Validate required fields
        if (!name || !category || !address || !city || !state || !zip || !phone) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

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
            email
        };

        console.log(businessData);

        // Save the business to the database
        const business = new businessModel(businessData);
        await business.save();

        // Respond with success
        res.status(201).json({ success: true, message: "Business created successfully." });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

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

export { createBusiness, getBusinesses };
