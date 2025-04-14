import { MONGO_URI } from "../config/env.js";
import mongoose from "mongoose";

if (!MONGO_URI) {
  throw new Error("Database URI is not loaded.");
}

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Database Sever..");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
