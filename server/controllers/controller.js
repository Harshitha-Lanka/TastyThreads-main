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
