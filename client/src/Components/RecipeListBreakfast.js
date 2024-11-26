import React, { useState, useEffect } from "react";
// Make sure the CSS file is in the same folder
import styles from './Component1.module.css';

const BreakfastRecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/TastyThreads/recipes");
        const data = await response.json();

        // Filter only Breakfast recipes
        const breakfastRecipes = data.filter((recipe) => recipe.category === "breakfast");
        setRecipes(breakfastRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center">Breakfast Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-item">
            <strong>{recipe.recipeTitle}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreakfastRecipeList;
