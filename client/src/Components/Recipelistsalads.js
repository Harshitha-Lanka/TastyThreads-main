import React, { useState, useEffect } from "react";

// Recipe list for salads
const RecipeListSalads = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/TastyThreads/recipes");
        const data = await response.json();

        // Filter only Salad recipes
        const saladRecipes = data.filter((recipe) => recipe.category === "salads");
        setRecipes(saladRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center">Salad Recipes</h2>
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

export default RecipeListSalads;
