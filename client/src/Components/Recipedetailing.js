import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipedetailing = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  // Fetch recipe details
  useEffect(() => {
    console.log("Fetching recipe for ID:", id); // Log the ID
    axios
      .get(`/api/recipes/${id}`)
      .then((response) => {
        console.log("Recipe data received:", response.data); // Log response data
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error); // Log errors
      });
  }, [id]);

  // Show a loading message while fetching data
  if (!recipe) return <div>Loading...</div>;

  // Render recipe details
  return (
    <div>
      <h1>{recipe.recipeTitle || "No Title Available"}</h1>
      <img src={recipe.image || "default-image-url.jpg"} alt={recipe.recipeTitle || "Recipe Image"} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients && recipe.ingredients.length > 0 ? (
          recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
        ) : (
          <li>No ingredients provided</li>
        )}
      </ul>
      <h2>Instructions</h2>
      <ul>
        {recipe.steps && recipe.steps.length > 0 ? (
          recipe.steps.map((step, index) => <li key={index}>{step}</li>)
        ) : (
          <li>No instructions provided</li>
        )}
      </ul>
      <h3>Serving Size: {recipe.servings || "N/A"}</h3>
      <h3>Prep Time: {recipe.prepTime || "N/A"}</h3>
      <h3>Cook Time: {recipe.cookTime || "N/A"}</h3>
    </div>
  );
};

export default Recipedetailing;
