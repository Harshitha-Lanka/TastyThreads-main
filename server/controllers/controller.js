// Importing the User model
const User = require("../models/schema-signup")

// Controller function for home route
const home = async (req, res) => {
  try {
    // Log the request body for debugging purposes
    console.log(req.body);
    
    // Destructure username, email, phone, and password from the request body
    const { username, email, phone, password } = req.body;

    // Check if a user with the same email already exists in the database
    const userExist = await User.findOne({ email: email });

    // If a user with the email already exists, return a 400 status with an error message
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Create a new user with the provided details
    const userCreated = await User.create({ username, email, phone, password });

    // Send back a success response with the created user information
    res.status(201).json({ msg: userCreated });
  } catch (error) {
    // If an error occurs, send a 500 status with a generic error message
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function for signup route
const signup = async (req, res) => {
  try {
    // Log the request body for debugging purposes
    console.log(req.body);
    
    // Send a response with the received request body
    res.status(200).send({ message: req.body });
  } catch (error) {
    // If an error occurs, send a 500 status with a generic error message
    res.status(500).json({ message: "Error loading the page" });
  }
};

// Controller function for recipe form route
const recipeform = async (req, res) => {
  try {
    // Send a response indicating that the recipe page was loaded successfully
    res.status(200).send({ message: "Recipe page" });
  } catch (error) {
    // If an error occurs, send a 500 status with a generic error message
    res.status(500).json({ message: "Error loading the page" });
  }
};

// Exporting all controller functions to be used in other parts of the application
module.exports = { home, signup, recipeform };
