const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/controller");

// Define all the routes
router.route("/").get(Controllers.home); // Home route
router.route("/SignUp").post(Controllers.signup); // Signup route
router.route("/RecipeForm").get(Controllers.recipeform); // Recipe form route
router.route("/recipes/add").post(Controllers.addRecipe); // Add a new recipe
router.route("/recipes").get(Controllers.getRecipes); // Get all recipes
const {
    getRecipeDetails,     // Function to fetch recipe details
    incrementLikes,       // Function to increment likes
    incrementDislikes,    // Function to increment dislikes
  } = require("../controllers/recipeController"); // Import controller functions
  
  
  // Route to fetch the recipe details
  router.get("/:id", getRecipeDetails);
  // Example: GET /api/recipe/123 -> Fetches the details for recipe with ID 123
  
  // Route to increment likes
  router.post("/:id/like", incrementLikes);
  // Example: POST /api/recipe/123/like -> Increments the like count for recipe with ID 123
  
  // Route to increment dislikes
  router.post("/:id/dislike", incrementDislikes);
  // Example: POST /api/recipe/123/dislike -> Increments the dislike count for recipe with ID 123

  // const express = require("express");
const { submitFeedback } = require("../controllers/feedbackController"); // Import the feedback controller



// POST route to handle feedback submissions
router.post("/feedback", submitFeedback);

module.exports = router; // Export the router


module.exports = router;
