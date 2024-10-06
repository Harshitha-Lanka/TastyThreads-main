// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define a Test Route
app.get('/', (req, res) => {
  res.send('Hello, MongoDB is connected and server is running!');
});

// Set the Port
const PORT = process.env.PORT || 5000;

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
