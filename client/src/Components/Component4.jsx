import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Component4.module.css';
import image6 from '../Images/image6.jpg'; // Import your cuisines image
import RecipeListCuisines from './Recipelistcuisines'; // Import the RecipeListCuisines component

const Component4 = () => {
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const cuisines = [
        { name: 'Indian', path: '/recipe/Indian' },
        { name: 'Italian', path: '/recipe/Italian' },
        { name: 'Chinese', path: '/recipe/Chinese' },
    ];

    return (
        <div className={styles.recipe3}>
            {/* Image of cuisines */}
            <img src={image6} alt="Cuisines" className={styles.recipeimage} />

            <div className={styles.recipecontent}>
                <h2 className={styles.recipetitle}>Available Cuisines</h2>
                <ul className={styles.breakfastlist}>
                    {cuisines.map((item) => (
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

                    {/* Conditionally render RecipeListCuisines */}
                    {showDropdown && <RecipeListCuisines />}
                </div>
            </div>
        </div>
    );
};

export default Component4;
