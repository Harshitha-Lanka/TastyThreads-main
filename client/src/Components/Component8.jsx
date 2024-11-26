import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Component8.module.css';
import image10 from '../Images/image10.jpg'; // Import your ice cream image
import RecipeListIceCream from './Recipelisticecreams'; // Import the component for listing ice cream recipes

const Component1 = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  const icecreams = [
    { name: 'Butterscotch', path: '/recipe/Butterscotch' },
    { name: 'Chocolate', path: '/recipe/Chocolate' },
    { name: 'Vanilla', path: '/recipe/Vanilla' }
  ];

  return (
    <>
      <div className={styles.recipe}>
        {/* Image of ice creams */}
        <img src={image10} alt="Ice Creams" className={styles.recipeimage} />

        {/* List of ice cream types */}
        <div className={styles.recipecontent}>
          <h2 className={styles.recipetitle}>Available Ice Creams</h2>
          <ul className={styles.lunchitems}>
            {icecreams.map((item) => (
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

            {/* Conditionally render RecipeListIceCream when the dropdown is active */}
            {showDropdown && <RecipeListIceCream />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
