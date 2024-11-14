import React, { useState } from 'react';
import styles from './Component1.module.css';
import RecipeList from './RecipeList'; // Import the RecipeList component
import breakfast from '../Images/breakfast.jpg';

const Component1 = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <h1 className={`${styles.heading} ${styles.fonteffectAnimation}`}>
                From Our Kitchen to Yours: Dive Into Recipes...
            </h1>
            <div className={styles.recipe1}>
                {/* Image of breakfast */}
                <img src={breakfast} alt="Breakfast" className={styles.recipeimage} />

                {/* Content of the available recipes */}
                <div className={styles.recipecontent}>
                    <h2 className={styles.recipetitle}>Available Breakfast</h2>
                    <ul className={styles.breakfastitem}>
                        <li>Idly</li>
                        <li>Dosa</li>
                        <li>Omelette</li>
                    </ul>

                    {/* Show More button and RecipeList component */}
                    <div className={styles.buttoncontainer}>
                        <button 
                            className={styles.show}
                            onClick={() => setShowDropdown(!showDropdown)}
                        >Show more
                        </button>
                        {showDropdown && <RecipeList />} {/* Render RecipeList component here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component1;
