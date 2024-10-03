import express from 'express';
import { userRegister, userLogin, adminLogin } from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post('/register', userRegister);
userRouter.post('/login', userLogin);
userRouter.post('/admin_login', adminLogin);

export default userRouter;