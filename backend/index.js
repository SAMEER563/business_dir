import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import businessRouter from './routes/businessRoute.js';





// App configuration
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter)
app.use('/api/business', businessRouter)

app.get('/', (req, res) => {
    res.send('API is running')
  })
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })