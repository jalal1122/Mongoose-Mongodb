import mongoose from "mongoose";
import apiError from "../utils/apiError.js";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    }
    catch(error){
        throw new apiError("Database connection failed", 500, error);
    }
}

export default connectDB;