import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import pool from './config/mysql.js';  // ✅ Correct MySQL import
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// ✅ MySQL Connection Test (already handled in mysql.js)

// API Endpoints
app.use('/api/users', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
    res.send("API Working with MySQL!");
});

// Start Server
app.listen(port, () => console.log(`🚀 Server started on PORT: ${port}`));
