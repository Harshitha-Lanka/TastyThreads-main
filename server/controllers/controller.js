const Recipe = require("../models/schema-recipeform");
const User = require("../models/schema-signup");

// Home controller
const home = async (req, res) => {
  res.status(200).send({ message: "Welcome to TastyThreads API" });
};

// Signup controller
const signup = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check for existing user
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ msg: "Email already exists" });

    // Create new user
    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({ msg: userCreated });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Add a new recipe (without image)
const addRecipe = async (req, res) => {
  try {
    const { recipeTitle, description, ingredients, steps, prepTime, cookTime, servings, category, calories } = req.body;

    // Save the recipe
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
    });
    res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ message: "Failed to add recipe", error });
  }
};
const incrementDislikes = async (req, res) => {
  const { id } = req.params; // Recipe ID from the request parameters

  try {
    const recipe = await Recipe.findOneAndUpdate(
      { recipeId: id },
      { $inc: { dislikes: 1 } }, // Increment the 'dislikes' field by 1
      { new: true, upsert: true } // Return the updated document and create it if it doesn't exist
    );

    res.status(200).json(recipe); // Return the updated recipe
  } catch (error) {
    res.status(500).json({ message: "Error incrementing dislikes", error: error.message });
  }
};
const incrementLikes = async (req, res) => {
  const { id } = req.params; // Recipe ID from the request parameters

  try {
    const recipe = await Recipe.findOneAndUpdate(
      { recipeId: id },
      { $inc: { likes: 1 } }, // Increment the 'likes' field by 1
      { new: true, upsert: true } // Return the updated document and create it if it doesn't exist
    );

    res.status(200).json(recipe); // Return the updated recipe
  } catch (error) {
    res.status(500).json({ message: "Error incrementing likes", error: error.message });
  }
  const Feedback = require("../models/feedbackModel"); // Import the Feedback model

// Controller to handle feedback submission
const submitFeedback = async (req, res) => {
  const { name, email, message } = req.body; // Extract data from the request body

  // Input validation (additional checks for server-side validation)
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a new feedback document
    const feedback = new Feedback({ name, email, message });

    // Save the feedback to the database
    await feedback.save();

    // Respond with success message
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    // Handle any errors during database operations
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
};

module.exports = { submitFeedback };

};

// Get all recipes (with optional category filtering)
const getRecipes = async (req, res) => {
  try {
    const { category } = req.query; // Extract category from query parameters

    let recipes;
    if (category) {
      // If category is provided, filter recipes by category
      recipes = await Recipe.find({ category });
    } else {
      // If no category is provided, get all recipes
      recipes = await Recipe.find({});
    }

    res.status(200).json(recipes); // Send the list of recipes
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve recipes", error });
  }
};

// Get a recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params; // Get recipe ID from URL
    console.log('Fetching recipe with ID:', id); // Log the ID for debugging

    // Find the recipe by ID in the database
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" }); // Handle if recipe not found
    }

    res.status(200).json(recipe); // Send the found recipe as response
  } catch (error) {
    console.error('Error fetching recipe:', error); // Log the error for debugging
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Delete a recipe by ID
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) return res.status(404).json({ message: "Recipe not found" });

    res.status(200).json({ message: "Recipe deleted successfully", recipe: deletedRecipe });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete recipe", error });
  }
};

module.exports = {
  home,
  signup,
  addRecipe,
  getRecipes,
  getRecipeById,
  deleteRecipe,
};
