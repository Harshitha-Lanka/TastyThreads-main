// models/Recipe.js
const Recipe = require("../models/schema-recipeform");


const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipeTitle: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String }],
  steps: [{ type: String }],
  prepTime: { type: String },
  cookTime: { type: String },
  servings: { type: String },
  category: { type: String },
  calories: { type: Number },
  image: { type: String } // Will store image URL or path after uploading
});

module.exports = mongoose.model("Recipe", recipeSchema);
