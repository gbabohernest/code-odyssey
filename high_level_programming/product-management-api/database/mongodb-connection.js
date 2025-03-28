import mongoose from "mongoose";
import { DB_URL, NODE_ENV } from "../config/env.js";

if (!DB_URL) {
  throw new Error("Please define the mongodb connection string in .env file");
}

const mongoDbConnection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`connected to the database in ${NODE_ENV} environment`);
  } catch (e) {
    console.error(`Error: Cannot connect to Database: ${e}`);

    process.exit(1);
  }
};

export default mongoDbConnection;
