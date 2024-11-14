<<<<<<< HEAD
const Recipe = require("../models/schema-recipeform");

=======
// Importing the User model
const User = require("../models/schema-signup")

// Controller function for home route
>>>>>>> 6248a16368cf259288eae229f3648e12074fac42
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

<<<<<<< HEAD
  const recipeform = async (req, res) => {
    try {
      res.status(200).send({ message: "recipe page" });
    } catch (error) {
      res.status(500).json({ message: "error loading the page" });
    }
  };
  const addRecipe = async (req, res) => {
    console.log(req.body)
    try {
      const recipeData = req.body;
      const newRecipe = new Recipe(recipeData);
      await newRecipe.save();
      res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
    } catch (error) {
      console.error("Error adding recipe:", error); // Log the error details
      res.status(500).json({ message: "Failed to add recipe", error });
    }
  };
  
  
  // Get all recipes
  const getRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find({});
      res.status(200).json(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error); // Log the error details
      res.status(500).json({ message: "Failed to retrieve recipes", error });
    }
  };
  
  
  module.exports = { home, signup , recipeform ,addRecipe,getRecipes};
=======
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
>>>>>>> 6248a16368cf259288eae229f3648e12074fac42
