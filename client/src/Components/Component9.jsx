import React from 'react'
import styles from  './Component9.module.css'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image11 from '../Images/image11.jpg'

const Component1 = () => {
    const Salads = [
        { name: 'Greensalad', path: '/recipe/Greensalad' },
        { name: 'Veg Vibe', path: '/recipe/VegVibe' },
         { name: 'Bowl glow', path: '/recipe/BowlGlow' }
      ];
  return (
    <>
   
    <div>

      <div className={styles.recipe}>
    
      <img src={image11} alt="Breakfast" className={styles.recipeimage}/>

     
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Salads</h2>
        <ul className={styles.breakfastitem}>
          {Salads.map((item) => (
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

export default Component1
