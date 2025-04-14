import { config } from "dotenv";

config();

export const { MONGO_URI, JWT_SECRET, JWT_EXPIRES_IN, PORT } = process.env;
