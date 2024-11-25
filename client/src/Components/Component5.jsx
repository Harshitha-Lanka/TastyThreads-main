import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Component5.module.css';
import image7 from '../Images/image7.jpg'; // Import your drinks image
import RecipeListDrinks from './Recipelistdrinks'; // Import the RecipeListDrinks component

const Component5 = () => {
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const drinkItems = [
        { name: 'Chai', path: '/recipe/Chai' },
        { name: 'Lassi', path: '/recipe/Lassi' },
        { name: 'Buttermilk', path: '/recipe/Buttermilk' },
    ];

    return (
        <div className={styles.recipe}>
            {/* Image of drinks */}
            <img src={image7} alt="Drinks" className={styles.recipeimage} />

            <div className={styles.recipecontent}>
                <h2 className={styles.recipetitle}>Available Drinks</h2>
                <ul className={styles.lunchitems}>
                    {drinkItems.map((item) => (
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

                    {/* Conditionally render RecipeListDrinks */}
                    {showDropdown && <RecipeListDrinks />}
                </div>
            </div>
        </div>
    );
};

export default Component5;
