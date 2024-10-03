import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
    // Basic business information
    name: {type: String, required: true,  trim: true},
    Description: {type: String},
    Category: {type: String, required: true},
    Image: {type: String},
    // Location information
    Address: {type: String, required: true},
    City: {type: String, required: true},
    State: {type: String, required: true},
    Zip: {type: String, required: true},
    // Contact information
    Phone: {type: String, required: true},
    Email: {type: String},

})

const businessModel = mongoose.models.business || mongoose.model('business', businessSchema)

export default businessModel;