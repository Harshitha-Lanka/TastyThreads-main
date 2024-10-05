import React from 'react'
import styles from  './Component6.module.css'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image8 from '../Images/image8.jpeg'

const Component6 = () => {
    const vegan = [
        { name: 'Poha', path: '/recipe/Poha' },
        { name: 'Upma', path: '/recipe/Upma' },
         { name: 'Vibrantveg', path: '/recipe/Vibrant' }
      ];
  return (
    <>
   
    <div>

      <div className={styles.recipe}>
      {/* Image of breakfast */}
      <img src={image8} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Vegan</h2>
        <ul className={styles.breakfastitem}>
          {vegan.map((item) => (
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

export default Component6
