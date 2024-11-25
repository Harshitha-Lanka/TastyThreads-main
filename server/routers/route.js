const express = require("express");
const multer = require("multer");
const Controllers = require("../controllers/controller");
const upload = require("../config/multer");  // Use the imported upload, not declare a new one

const router = express.Router();

// Routes
router.get("/", Controllers.home); // Home route
router.post("/SignUp", Controllers.signup); // Signup route

router.get("/recipes", Controllers.getRecipes); // Get all recipes
router.get("/recipes/:id", Controllers.getRecipeById); // Get recipe by ID
router.delete("/recipes/:id", Controllers.deleteRecipe); // Delete recipe by ID
router.post("/recipes/add", upload.single("image"), Controllers.addRecipe);  // Use the imported upload

module.exports = router;
