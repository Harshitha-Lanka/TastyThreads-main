import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Recipedetailing.css";

const Recipedetailing = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-details">
      <h1>{recipe.recipeTitle || "No Title"}</h1>
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients && recipe.ingredients.length > 0 ? (
          recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No ingredients</li>
        )}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.steps && recipe.steps.length > 0 ? (
          recipe.steps.map((step, index) => <li key={index}>{step}</li>)
        ) : (
          <li>No instructions</li>
        )}
      </ol>
    </div>
  );
};

export default Recipedetailing;
