const express = require("express");

const Controllers = require("../controllers/controller");

const router = express.Router();

// Routes
router.get("/", Controllers.home); // Home route
router.post("/SignUp", Controllers.signup); // Signup route

router.get("/recipes", Controllers.getRecipes); // Get all recipes
router.get("/recipes/:id", Controllers.getRecipeById); // Get recipe by ID
router.delete("/recipes/:id", Controllers.deleteRecipe); // Delete recipe by ID
router.post("/recipes/add", Controllers.addRecipe);  // Use the imported upload

module.exports = router;