import React, { useState, useEffect } from "react";

// Recipe list for desserts
const RecipeListDesserts = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/recipes");
        const data = await response.json();

        // Filter only Dessert recipes
        const dessertRecipes = data.filter((recipe) => recipe.category === "desserts");
        setRecipes(dessertRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center">Dessert Recipes</h2>
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

export default RecipeListDesserts;
