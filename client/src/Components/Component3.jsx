import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Component3.module.css';
import RecipeListDesserts from './Recipelistdesserts'; // Importing RecipeListDesserts component
import image5 from '../Images/image5.png'; // Import your desserts image

const Component3 = () => {
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const desserts = [
        { name: 'Gulabjamun', path: '/recipe/Gulabjamun' },
        { name: 'Jalebi', path: '/recipe/Jalebi' },
        { name: 'Kulfi', path: '/recipe/Kulfi' }
    ];

    return (
        <>
            <div className={styles.recipe}>
                {/* Image of desserts */}
                <img src={image5} alt="Desserts" className={styles.recipeimage} />

                {/* List of dessert types */}
                <div className={styles.recipecontent}>
                    <h2 className={styles.recipetitle}>Available Desserts</h2>
                    <ul className={styles.breakfastlist}> {/* change this */}
    {desserts.map((item) => (
        <li key={item.name} className={styles.breakfastitem}> {/* change this */}
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

                        {/* Conditionally render RecipeListDesserts */}
                        {showDropdown && <RecipeListDesserts />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Component3;
