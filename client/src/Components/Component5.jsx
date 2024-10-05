import React from 'react'
import styles from  './Component5.module.css'


import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image7 from '../Images/image7.jpg'

const Component5 = () => {
    const lunchitems = [
        { name: 'Chai', path: '/recipe/Chai' },

        { name: 'Lassi', path: '/recipe/Lassi' },
        {name:'Buttermilk', path:'/recipe/Buttermilk'},

        // { name: 'Lassi', path: '/recipe/Lassi' },
        // {name:'Buttermilk', path:'/recipe/Buttermilk'},

        
      ];
  return (
    <>
   
    <div>
    
      <div className={styles.recipe}>
      {/* Image of breakfast */}
      <img src={image7} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}> Available Drinks</h2>
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

export default Component5
