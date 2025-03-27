import mongoose from 'mongoose';
import { DB_URL, NODE_ENV } from '../config/env.js';

if (!DB_URL) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.<development/production>.local'
  );
}
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`connected to mongodb in ${NODE_ENV} mood`);
  } catch (e) {
    console.error(`Failed to connect to mongodb: ${e}`);

    process.exit(1);
  }
};

export default connectToDatabase;
