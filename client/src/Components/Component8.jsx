import React from 'react'
import styles from  './Component8.module.css'

import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image10 from '../Images/image10.jpg'

const Component1 = () => {
    const icecreams = [
        { name: 'Butterscotch', path: '/recipe/Butterscotch' },
        { name: 'Chocolate', path: '/recipe/Chocolate' },
         { name: 'Vanilla', path: '/recipe/Vanilla' }
      ];
  return (
    <>
   
    <div>
    
      <div className={styles.recipe}>
      {/* Image of breakfast */}
      <img src={image10} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Icecreams</h2>
        <ul className={styles.lunchitems}>
          {icecreams.map((item) => (
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
