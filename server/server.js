require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const connectDb = require("./config/db");
const router = require("./routers/route");

const app = express();  // Initialize the app here
const PORT = 5000;



// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });
app.use(upload.none()); // Default multer setup for parsing multipart/form-data

// Routes
app.use("/", router);

// Database connection and server startup
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at :${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
    process.exit(1); // Exit the process if DB connection fails
  });
