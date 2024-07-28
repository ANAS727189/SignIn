import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from './db.js';
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";


connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
