import React, { useState, useEffect } from 'react';


const RecipeListDrinks = () => {
    const [recipes, setRecipes] = useState([]);

    // Fetch drinks recipes from the backend
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("http://localhost:5000/TastyThreads/recipes");
                const data = await response.json();

                // Filter only Drinks recipes
                const drinkRecipes = data.filter((recipe) => recipe.category === "drinks");
                setRecipes(drinkRecipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h3 className="text-primary text-center">Drink Recipes</h3>
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

export default RecipeListDrinks;
