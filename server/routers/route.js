const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/controller");

// Define all the routes
router.route("/").get(Controllers.home); // Home route
router.route("/SignUp").post(Controllers.signup); // Signup route
router.route("/login").post(Controllers.login); // login route
router.route("/RecipeForm").get(Controllers.recipeform); // Recipe form route
router.route("/recipes/add").post(Controllers.addRecipe); // Add a new recipe
router.route("/recipes").get(Controllers.getRecipes); // Get all recipes

module.exports = router;
