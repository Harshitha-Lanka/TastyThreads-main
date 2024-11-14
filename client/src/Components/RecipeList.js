import React, { useState, useEffect } from 'react';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("http://localhost:5000/TastyThreads/recipes");
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Show More</button>
            {showDropdown && (
                <ul>
                    {recipes.map(recipe => (
                        <li key={recipe._id}>{recipe.recipeTitle}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecipeList;
