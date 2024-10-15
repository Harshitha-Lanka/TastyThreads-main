const mongoose = require("mongoose");

//use the same URI as declared in .env file
const URI = process.env.MONGODB_URI;

//connectDb function to determine if there is successful connection with your MongoDB Atlas database
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;