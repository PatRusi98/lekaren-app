import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/productIndex.js";
import userRoutes from "./routes/userIndex.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(3001, () => console.log('Server running at port 3001'));