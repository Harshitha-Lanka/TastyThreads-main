const Recipe = require("../models/schema-recipeform");

const home = async (req, res) => {
    try {
      res.status(200).json({ msg: "home page" });
    } catch (error) {
      console.log(error);
    }
  };


  //code for your signup controller
  const signup = async (req, res) => {
    try {
        console.log(req.body)
      res.status(200).send({ message: req.body });
    } catch (error) {
      res.status(500).json({ message: "error loading the page" });
    }
  };


  const recipeform = async (req, res) => {
    try {
      res.status(200).send({ message: "recipe page" });
    } catch (error) {
      res.status(500).json({ message: "error loading the page" });
    }
  };
  const addRecipe = async (req, res) => {
    console.log(req.body)
    try {
      const recipeData = req.body;
      const newRecipe = new Recipe(recipeData);
      await newRecipe.save();
      res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
    } catch (error) {
      console.error("Error adding recipe:", error); // Log the error details
      res.status(500).json({ message: "Failed to add recipe", error });
    }
  };
  
  
  // Get all recipes
  const getRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find({});
      res.status(200).json(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error); // Log the error details
      res.status(500).json({ message: "Failed to retrieve recipes", error });
    }
  };
  
  
  module.exports = { home, signup , recipeform ,addRecipe,getRecipes};