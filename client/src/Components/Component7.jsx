import React, { useState } from 'react';
import styles from './Component1.module.css';
import { Link } from 'react-router-dom';
import image9 from '../Images/image9.jpeg'; // Import the snacks image
import RecipeListSnacks from './Recipelistsnacks'; // Import RecipeListSnacks component

const Component7 = () => {
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const snacks = [
        { name: 'Chat', path: '/recipe/Chat' },
        { name: 'PaniPuri', path: '/recipe/PaniPuri' },
        { name: 'Samosa', path: '/recipe/Samosa' },
    ];

    return (
        <div className={styles.recipe1}>
            {/* Image of snacks */}
            <img src={image9} alt="Snacks" className={styles.recipeimage} />

            <div className={styles.recipecontent}>
                <h2 className={styles.recipetitle}>Available Snacks</h2>
                <ul className={styles.breakfastitem}>
                    {snacks.map((item) => (
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

                    {/* Conditionally render RecipeListSnacks */}
                    {showDropdown && <RecipeListSnacks />}
                </div>
            </div>
        </div>
    );
};

export default Component7;
