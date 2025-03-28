import { config } from "dotenv";

config();

export const { PORT, DB_URL, NODE_ENV } = process.env;
