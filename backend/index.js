import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoute from './routes/ProductRoute.js';
dotenv.config();

const app = express();
// Add middlewares
app.use(cors());
app.use(express.json());

app.use(ProductRoute);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
})