import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';

import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'it works'
  });
});

// Not found Route middleware
app.use(notFound);

// Global error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
