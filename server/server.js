require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const multer = require("multer");
const app = express();
const router = require("./routers/route");
const connectDb = require("./config/db");

// Configure multer (no storage needed if no files are being uploaded)
const upload = multer();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

// Use multer middleware specifically for multipart/form-data
app.use("/TastyThreads", upload.none(), router);

const PORT = 5000;

// Connect to the database first, then start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
}).catch((error) => {
  console.error("Database connection failed", error);
  
  process.exit(1); // Exit the process with an error
});
