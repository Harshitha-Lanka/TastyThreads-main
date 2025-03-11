const express = require("express");
const Controllers = require("../controllers/controller");
const contactController = require("../controllers/ContactController"); 
console.log("✅ Contact Controller Loaded:", contactController);


const router = express.Router();

// Log every incoming request (for debugging)
router.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Routes
router.get("/", Controllers.home); 
router.post("/SignUp", Controllers.signup);

router.get("/recipes", Controllers.getRecipes);
router.get("/recipes/:id", Controllers.getRecipeById);
router.delete("/recipes/:id", Controllers.deleteRecipe);
router.post("/contact", contactController.submitContactForm);


router.post("/recipes/add", (req, res, next) => {
  console.log("🔹 POST /recipes/add Hit!"); // Debugging Log
  next();
}, Controllers.addRecipe);

module.exports = router;
