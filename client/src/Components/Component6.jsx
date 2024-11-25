import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Component6.module.css';
import image8 from '../Images/image8.jpeg'; // Import your vegan food image
import RecipeListVegan from './Recipelistvegan'; // Import RecipeListVegan component

const Component6 = () => {
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const vegan = [
        { name: 'Poha', path: '/recipe/Poha' },
        { name: 'Upma', path: '/recipe/Upma' },
        { name: 'Vibrant Veg', path: '/recipe/Vibrant' },
    ];

    return (
        <div className={styles.recipe}>
            {/* Image of vegan food */}
            <img src={image8} alt="Vegan" className={styles.recipeimage} />

            <div className={styles.recipecontent}>
                <h2 className={styles.recipetitle}>Available Vegan</h2>
                <ul className={styles.breakfastitem}>
                    {vegan.map((item) => (
                        <li key={item.name} className={styles.breakfastitem}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Show More button */}
                <div className={styles.buttoncontainer}>
                    <button
                        className={styles.show}
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        {showDropdown ? 'Show Less' : 'Show More'}
                    </button>

                    {/* Conditionally render RecipeListVegan */}
                    {showDropdown && <RecipeListVegan />}
                </div>
            </div>
        </div>
    );
};

export default Component6;
