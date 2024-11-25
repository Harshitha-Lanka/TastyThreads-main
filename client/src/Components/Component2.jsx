import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Component2.module.css';
import RecipeListLunch from './RecipeListLunch'; // Importing RecipeListLunch component
import image3 from '../Images/image3.jpg'; // Import your lunch image

const Component2 = () => {
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const lunchitems = [
        { name: 'Paneer Curry', path: '/recipe/Paneer' },
        { name: 'Chicken Curry', path: '/recipe/Chicken' },
        { name: 'Biryani', path: '/recipe/Biryani' }
    ];

    return (
        <>
            <div className={styles.recipe}>
                {/* Image of lunch */}
                <img src={image3} alt="Lunch" className={styles.recipeimage} />

                {/* List of lunch types */}
                <div className={styles.recipecontent}>
                    <h2 className={styles.recipetitle}>Available Lunch</h2>
                    <ul className={styles.lunchitems}>
                        {lunchitems.map((item) => (
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

                        {/* Conditionally render RecipeListLunch */}
                        {showDropdown && <RecipeListLunch />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Component2;
