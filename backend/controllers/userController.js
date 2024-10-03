import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";



const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
 }

// Route for user login
const userLogin = async (req,res) => {
    try {
        const {email,password,role} = req.body;  
        const user = await userModel.findOne({email});

        if(!user) {
            return res.json({message: "User not found"});
        }
         
        // Check if the password matches
        const isPasswordMatch = await bcrypt.compare(password, user.password);

          // Check if the role matches
          if (user.role !== role) {
            return res.status(403).json({ success: false, message: "Role mismatch" });
        }

        if(isPasswordMatch) {

            // Create a token
         const token = createToken(user._id);
         res.json({success: true,  token, role: user.role});
        } else {
            res.json({success:false, message: "Invalid credentials"});
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

// Route for user registration
const userRegister = async (req,res) => {
    try {
        const {name, email, password, role} = req.body;

        // Check if user already exists
        const userExists = await userModel.findOne({email});
        if(userExists) {
            return res.json({success:false, message:"User already exists"});
        }

        // Validate email address and strong password
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"})
         }
         if (password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"})
         }

         // hashing your password
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password,salt)

         const newUser = new userModel({
            name,
            email,
            password:hashedPassword,
            role
         })

         const user = await newUser.save()

         const token = createToken(user._id)

         res.json({success: true, token})

    }
    catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

// // Route for admin login 
// const adminLogin = async (req, res) => {

//    try {
//       const {email,password} = req.body

//       if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
//          const token = jwt.sign(email+password, process.env.JWT_SECRET);
//          res.json({success:true,token})
//       } else {
//          res.json({success:false,message:"Invalid credentials"})
//       }
//    } catch (error) {
//       console.log(error);
//       res.json({success:false, message:error.message})
//    }
// }

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the email and password match the environment variables for admin
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // Create a token
            const token = jwt.sign({ email,password, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });

            // Respond with success, token, and role
            return res.status(200).json({
                success: true,
                token,
                role: 'admin'
            });
        } else {
            // Invalid credentials
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};


export {userRegister, userLogin, adminLogin};