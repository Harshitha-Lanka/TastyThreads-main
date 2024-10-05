import React from 'react'
import styles from  './Component1.module.css'
import Header from './Header'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  breakfast from '../Images/breakfast.jpg'
import Contactus from './Contactus';
const Component1 = () => {
    const breakfastItems = [
        { name: 'Idly', path: '/recipe/Idly' },
        { name: 'Dosa', path: '/recipe/Dosa' },
         { name: 'Omelette', path: '/recipe/Omelette' }
      ];
  return (
  <>
    <Header/>
<div>
    <h1 className={`${styles.heading} ${styles.fonteffectAnimation}`}>  From Our Kitchen to Yours: Dive Into Recipes...</h1>
      <div className={styles.recipe1}>
      {/* Image of breakfast */}
      <img src={breakfast} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Breakfast</h2>
        <ul className={styles.breakfastitem}>
          {breakfastItems.map((item) => (
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
