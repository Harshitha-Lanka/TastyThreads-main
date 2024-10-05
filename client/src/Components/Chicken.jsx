import React from 'react'
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image28 from '../Images/image28.jpg'

const ChickenCurry = () => {
  return (
    <>
    <Header/>
    <div>
      <h1 className={styles.fluffy}>Savor the Spice: Ultimate Chicken Curry Delight!</h1>
      <div className={styles.imagecontainer}>
      <img src={image28} className={styles.idly}></img>
      </div>
      
      <div className={styles.recipescontainer}>
      <div className={styles.infoitem}>
        <h2>8</h2>
        <p>Ingredients</p>
      </div>
      <div className={styles.infoitem}>
        <h2>45</h2>
        <p>Minutes</p>
      </div>
      <div className={styles.infoitem}>
        <h2>350</h2>
        <p>KCal</p>
      </div>
     
    </div>
      <div className={styles.maincontainer}>
 
        <h2 className={styles.ingre}>Ingredients:</h2>
    
      <div className={styles.ing}>
        <ul className={styles.list}>
       <li> Chicken: 500 grams, cut into pieces</li>
       <li>Onion: 1 large, chopped</li>
       <li>Tomato: 1 large, chopped</li>
       <li>Yogurt: 2 tablespoons</li>
       <li>Butter: 1 tablespoon (optional)</li>
       <li>Garlic-Ginger Paste: 1 tablespoon</li>
       <li>Spices: 1 teaspoon each of red chili powder, turmeric, and garam masala</li>
       <li>Salt & Oil: as needed</li>
      
        </ul>
      </div>
     <div className={styles.stepscontainer}>
   <h2 className={styles.steps}>Steps:</h2>
   <ul className={styles.idlysteps}>
   <li>Heat Oil & Sauté Onions: Heat oil in a pan and add chopped onions. Sauté until they turn golden brown.</li>

   <li>Add Garlic-Ginger Paste: Add garlic-ginger paste to the onions and cook for 1-2 minutes until the raw smell disappears.</li>

   <li>Add Tomatoes & Cook: Add chopped tomatoes, salt, and red chili powder. Cook until the tomatoes become soft and the oil starts separating from the mixture.</li>

   <li>Incorporate Chicken: Add the chicken pieces and stir well. Cook on medium heat for 5-7 minutes until the chicken changes color and is partially cooked.</li>

   <li>Add Water & Simmer: Add 1/2 cup of water, cover the pan, and let it simmer for 15-20 minutes until the chicken is fully cooked and tender.</li>

   <li>Finish with Spices: Sprinkle turmeric and garam masala, stir, and let it cook for another 2 minutes.</li>

   <li>Serve: Garnish with fresh coriander (optional) and serve hot with rice or naan</li>
   </ul>
   </div>
   </div>
   
   
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
     <li> Breads: Naan, Roti, or Paratha</li>
     <li> Rice: Steamed Basmati Rice, Jeera Rice, or Pulao</li>
     <li> Salad: Onion, cucumber, and tomato salad with lemon juice</li>
     <li> Raita: Boondi Raita or Cucumber Raita</li>


      </ul>
     
    
    <div>
      <h1 className={styles.notes}>Recipe Notes: Capture & Save Your Culinary Creations</h1>
      <textarea rows={25} columns={25} placeholder='Write your notes here...' className={styles.area}></textarea>
    </div>
    <br></br><br></br>
    <Statistics/>
    <Footer/>
    </div>
    </>
  )
}

export default ChickenCurry