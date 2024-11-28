import React, { useState, useEffect } from "react";

// Recipe list for ice creams
const RecipeListIceCream = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/recipes");
        const data = await response.json();

        // Filter only Ice Cream recipes
        const iceCreamRecipes = data.filter((recipe) => recipe.category === "icecreams");
        setRecipes(iceCreamRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center">Icecream Recipes</h2>
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

export default RecipeListIceCream;
