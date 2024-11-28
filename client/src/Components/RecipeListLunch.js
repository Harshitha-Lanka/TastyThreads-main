import React, { useState, useEffect } from "react";

// Recipe list for lunch
const RecipeListLunch = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/recipes");
        const data = await response.json();

        // Filter only Lunch recipes
        const lunchRecipes = data.filter((recipe) => recipe.category === "lunch");
        setRecipes(lunchRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center">Lunch Recipes</h2>
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

export default RecipeListLunch;
