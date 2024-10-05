// src/RecipeForm.js
import './Recipe.css';
import React, { useState } from 'react';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    recipeTitle: '',
    description: '',
    ingredients: ['', '', '', '', '', '', ''],
    steps: ['', '', '', '', '', '', ''],
    prepTime: '',
    cookTime: '',
    servings: '',
    category: '',
    calories: '',
    image: null, // State to store the image file
  });

  const handleChange = (e) => {
    const { name, value, dataset, files } = e.target;
    
    if (name === 'image') {
      // Handle image file change
      setFormData({ ...formData, [name]: files[0] });
    } else if (dataset.index) {
      const index = parseInt(dataset.index);
      setFormData((prevData) => ({
        ...prevData,
        [name]: prevData[name].map((item, i) => (i === index ? value : item))
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a FormData object to handle file uploads along with text fields
    const data = new FormData();
    data.append('recipeTitle', formData.recipeTitle);
    data.append('description', formData.description);
    formData.ingredients.forEach((ingredient, index) => {
      data.append(`ingredients[${index}]`, ingredient);
    });
    formData.steps.forEach((step, index) => {
      data.append(`steps[${index}]`, step);
    });
    data.append('prepTime', formData.prepTime);
    data.append('cookTime', formData.cookTime);
    data.append('servings', formData.servings);
    data.append('category', formData.category);
    data.append('calories', formData.calories);
    if (formData.image) data.append('image', formData.image);

    console.log('Recipe Submitted:', formData);

    // Reset form data after submission
    setFormData({
      recipeTitle: '',
      description: '',
      ingredients: ['', '', '', '', '', '', ''],
      steps: ['', '', '', '', '', '', ''],
      prepTime: '',
      cookTime: '',
      servings: '',
      category: '',
      calories: '',
      image: null,
    });
  };

  return (
    <div className="recipepage">
      <div className="border1">
        <h2 className="text-primary text-center headerlog">Recipe Form</h2>

        <label className="form-label">Recipe Title:</label>
        <input
          type="text"
          name="recipeTitle"
          value={formData.recipeTitle}
          onChange={handleChange}
          required
          className="formcontrol"
        />

        <label className="form-label">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="formcontrol"
        />

        {/* Ingredients */}
        <label className="form-label">Ingredients (up to 7):</label>
        {formData.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            data-index={index}
            value={ingredient}
            onChange={handleChange}
            className="formcontrol"
            placeholder={`Ingredient ${index + 1}`}
          />
        ))}

        {/* Steps */}
        <label className="form-label">Steps (up to 7):</label>
        {formData.steps.map((step, index) => (
          <input
            key={index}
            type="text"
            name="steps"
            data-index={index}
            value={step}
            onChange={handleChange}
            className="formcontrol"
            placeholder={`Step ${index + 1}`}
          />
        ))}

        {/* <label className="form-label">Preparation Time (minutes):</label>
        <input
          type="number"
          name="prepTime"
          value={formData.prepTime}
          onChange={handleChange}
          required
          className="formcontrol"
        /> */}

        <label className="form-label">Cooking Time (minutes):</label>
        <input
          type="number"
          name="cookTime"
          value={formData.cookTime}
          onChange={handleChange}
          required
          className="formcontrol"
        />

        <label className="form-label">Calories:</label>
        <input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          required
          className="formcontrol"
        />

        <label className="form-label">Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="formcontrol"
        >
          <option value="">Select Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="desserts">Desserts</option>
          <option value="cuisines">Cuisines</option>
          <option value="drinks">Drinks</option>
          <option value="vegan">Vegan</option>
          <option value="snacks">Snacks</option>
          <option value="icecreams">Ice Creams</option>
          <option value="salads">Salads</option>
        </select>

        {/* Image Upload */}
        <label className="form-label">Upload Recipe Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="formcontrol"
        />

        <button type="submit" className="button1" onClick={handleSubmit}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeForm;
