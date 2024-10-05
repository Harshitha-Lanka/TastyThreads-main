import React from 'react'
import styles from  './Component3.module.css'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image5 from '../Images/image5.png'

const Component3 = () => {
    const desserts = [
        { name: 'Gulabjamun', path: '/recipe/Gulabjamun' },
        { name: 'Jalebi', path: '/recipe/Jalebi' },
         { name: 'Kulfi', path: '/recipe/Kulfi' }
      ];
  return (
    <>
   
    <div>

      <div className={styles.recipe}>
      {/* Image of breakfast */}
      <img src={image5} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Desserts</h2>
        <ul className={styles.breakfastitem}>
          {desserts.map((item) => (
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

export default Component3
