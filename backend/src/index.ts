import axios from "axios";
import express from "express";
import { PrismaClient } from 'prisma-shared';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const prisma = new PrismaClient();
const app = express()

// Middleware
app.use(cors());
app.use(express.json());

app.get("/status", async (req, res) => {
    try {
        res.status(200).json({
            message: "Ok"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
});

// Import routes
import userRoutes from './routes/user.routes';

// Use routes
app.use('/api/user', userRoutes);

app.listen(3004, () => {
    console.log("server is running on port 3004");
})
