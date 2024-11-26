
import React, { useState } from 'react';
import styles from './Component9.module.css';
import { Link } from 'react-router-dom';
// Import RecipeListSalads component
import RecipeListSalads from './Recipelistsalads';
import image11 from '../Images/image11.jpg'; // Salad image

const Component9 = () => {
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const salads = [
        { name: 'Greensalad', path: '/recipe/Greensalad' },
        { name: 'Veg Vibe', path: '/recipe/VegVibe' },
        { name: 'Bowl glow', path: '/recipe/BowlGlow' },
    ];

    return (
        <>
            <div>
                <div className={styles.recipe}>
                    {/* Image of Salads */}
                    <img src={image11} alt="Salads" className={styles.recipeimage} />

                    {/* Content for Available Salads */}
                    <div className={styles.recipecontent}>
                        <h2 className={styles.recipetitle}>Available Salads</h2>
                        <ul className={styles.breakfastitem}>
                            {salads.map((item) => (
                                <li key={item.name} className={styles.breakfastitem}>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>

                        {/* Show More Button */}
                        <div className={styles.buttoncontainer}>
                            <button
                                className={styles.show}
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                {showDropdown ? 'Show Less' : 'Show More'}
                            </button>

                            {/* Conditionally render RecipeListSalads when the dropdown is active */}
                            {showDropdown && <RecipeListSalads />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Component9;
