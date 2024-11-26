const Recipe = require("../models/schema-recipeform");
const User = require("../models/schema-signup");
const multer = require("multer");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Add timestamp to filenames
  },
});
const upload = multer({ storage }); // Use the storage configuration


// Helper function to clean recipe data
function cleanRecipeData(recipe) {
  recipe.ingredients = recipe.ingredients.filter((ingredient) => ingredient !== "");
  recipe.steps = recipe.steps.filter((step) => step !== "");
  if (!recipe.image || recipe.image === "null") {
    recipe.image = "default-image-url.jpg"; // Use placeholder image URL
  }
  return recipe;
}

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

// Add a new recipe
const addRecipe = async (req, res) => {
  try {
    const { recipeTitle, description, ingredients, steps, prepTime, cookTime, servings, category, calories } = req.body;
    const image = req.file ? req.file.path : null; // If an image is uploaded

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
      image,
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

// Get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve recipes", error });
  }
};

// Get a recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the recipe ID from the request
    const recipe = await Recipe.findById(id); // Find the recipe in the database by ID

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" }); // Return error if recipe not found
    }

    const cleanedRecipe = cleanRecipeData(recipe); // Clean the recipe data if needed
    res.status(200).json(cleanedRecipe); // Send the cleaned recipe back as JSON
  } catch (error) {
    console.error("Error fetching recipe by ID:", error); // Log errors for debugging
    res.status(500).json({ error: "Internal server error" }); // Return generic server error
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
// router.get('/api/recipes/:id', async (req, res) => {
//   try {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) {
//       return res.status(404).json({ message: 'Recipe not found' });
//     }
//     res.json(recipe);
//   } catch (error) {
//     console.error('Error fetching recipe:', error);
//     res.status(500).json({ message: 'Failed to fetch recipe' });
//   }
// });

module.exports = {
  home,
  signup,
  addRecipe,
  getRecipes,
  getRecipeById,
  deleteRecipe,
};
