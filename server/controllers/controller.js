const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/schema-signup");
const Recipe = require("../models/schema-recipeform"); // Assuming schema-recipeform exists

// Controller function for signup route
const signup = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const { username, email, phone, password, confirmPassword } = req.body;

    // Validate required fields
    if (!username || !email || !phone || !password || !confirmPassword) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    // Check if email already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const newUser = new User({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Generate JWT token
    const token = await savedUser.generateToken();

    res.status(201).json({
      msg: "User registered successfully",
      user: savedUser,
      token,
      userId: savedUser._id.toString(),
    });
  } catch (error) {
    console.error("Error in signup route:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function for home route (if needed for a dashboard or a general response)
const home = (req, res) => {
  res.status(200).json({ message: "Welcome to TastyThreads API" });
};

// Updated Controller function for login
const login = async (req, res) => {
  try {
    console.log("Login request received with:", req.body); // Debugging log
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = await userExist.generateToken();
    res.status(200).json({ msg: "Login successful", token, userId: userExist._id.toString() });
  } catch (error) {
    console.error("Error in login route:", error.message || error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Controller function for recipe form route
const recipeform = async (req, res) => {
  try {
    res.status(200).send({ message: "Recipe page" });
  } catch (error) {
    res.status(500).json({ message: "Error loading the page" });
  }
};

// Controller function to add a new recipe
const addRecipe = async (req, res) => {
  try {
    const { recipeTitle, description, ingredients, steps, prepTime, cookTime, servings, category, calories, image } = req.body;

    // Create a new recipe in the database
    const newRecipe = await Recipe.create({
      recipeTitle,
      description,
      ingredients,
      steps,
      prepTime,
      cookTime,
      servings,
      category,
      calories,
      image,
    });

    res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
  } catch (error) {
    console.error("Error adding recipe:", error);
    res.status(500).json({ message: "Error adding recipe" });
  }
};

// Controller function to get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes from the database
    res.status(200).json({ message: "Recipes fetched successfully", recipes });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

// Exporting all controller functions
module.exports = { home, signup, login, recipeform, addRecipe, getRecipes };
