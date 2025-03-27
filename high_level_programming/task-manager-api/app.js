import express from 'express';
import { PORT, NODE_ENV } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
  res.send('okay running');
});

app.listen(PORT, () => {
  console.log({
    success: true,
    message: `task-manager-api is running on http://localhost:${PORT}`,
  });
});
