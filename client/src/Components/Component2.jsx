import React from 'react'
import styles from  './Component2.module.css'

import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image3 from '../Images/image3.jpg'

const Component2 = () => {
    const lunchitems = [
        { name: 'Paneer Curry', path: '/recipe/Paneer' },
        { name: 'Chicken Curry', path: '/recipe/Chicken' },
         { name: 'Biryani', path: '/recipe/Biryani' }
      ];
  return (
    <>
   
    <div>
    
      <div className={styles.recipe}>
      {/* Image of breakfast */}
      <img src={image3} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Lunch</h2>
        <ul className={styles.lunchitems}>
          {lunchitems.map((item) => (
            <li key={item.name} className={styles.breakfastitem}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttoncontainer}>
        <button className={styles.show}>Show More</button>
        </div>

      </div>
      
    </div>

    </div>
    </>
  )
}

export default Component2
