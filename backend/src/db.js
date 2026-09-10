import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/desarrollo-web");
        console.log("Database connected");
    } catch (error) {
        console.error(error);
    }
}