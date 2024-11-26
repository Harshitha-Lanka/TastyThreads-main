import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch all recipes when the component is mounted
  useEffect(() => {
    axios.get('/api/recipes')  // Endpoint that fetches all recipes
      .then((response) => {
        setRecipes(response.data); // Store fetched recipes
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            {/* Link to the recipe details page, passing the recipe ID */}
            <Link to={`/recipe/${recipe._id}`}>{recipe.recipeTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListPage;
