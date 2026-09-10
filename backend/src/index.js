import express from "express";
import morgan from "morgan";
import { connectDB } from "./db.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

connectDB()

app.use("/api", authRoutes);

app.listen(4000)
console.log("Server is running on port 4000");