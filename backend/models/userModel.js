import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true,  enum: ['admin', 'user'], default: 'user'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now }
}, {minimize: false })

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel;