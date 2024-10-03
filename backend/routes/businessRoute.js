import express from 'express';
import { createBusiness } from '../controllers/businessController.js';



const businessRouter = express.Router();

businessRouter.post('/create',createBusiness);


export default businessRouter;