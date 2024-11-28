const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipeTitle: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  steps: [{ type: String, required: true }],
  prepTime: { type: String, required: true },
 
  servings: { type: String, required: true },
  category: { type: String, required: true },
  calories: { type: Number, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
