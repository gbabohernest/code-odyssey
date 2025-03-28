import { config } from 'dotenv';

//.env.production.local || .env.development.local
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT, NODE_ENV, DB_URL } = process.env;
