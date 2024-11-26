import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Component1.module.css';
import BreakfastRecipeList from './RecipeListBreakfast';  // Corrected import

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
                        <li><Link to="/recipe/Idly">Idly</Link></li>
                        <li><Link to="/recipe/Dosa">Dosa</Link></li>
                        <li><Link to="/recipe/Omelette">Omelette</Link></li>
                    </ul>

                    <div className={styles.buttoncontainer}>
                        <button 
                            className={styles.show}
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            {showDropdown ? "Show Less" : "Show More"}
                        </button>
                        {/* Pass the state to BreakfastRecipeList */}
                        {showDropdown && <BreakfastRecipeList />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component1;
