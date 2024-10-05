import React from 'react'
import styles from  './Component1.module.css'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image9 from '../Images/image9.jpeg'
import Header from './Header'


const Component7 = () => {
    const snacks = [
        { name: 'Chat', path: '/recipe/Chat' },
        { name: 'PaniPuri', path: '/recipe/PaniPuri' },
         { name: 'Samosa', path: '/recipe/Samosa' }
      ];
  return (
    <>
    <h1 className={`${styles.heading} ${styles.fontEffectAnimation}`}></h1>
    <div>

      <div className={styles.recipe1}>
      {/* Image of breakfast */}
      <img src={image9} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Snacks</h2>
        <ul className={styles.breakfastitem}>
          {snacks.map((item) => (
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

export default Component7
