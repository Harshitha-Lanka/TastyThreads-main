import React from 'react'
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image26 from '../Images/image26.jpg'

const Omlette = () => {
  return (
    <>
    <Header/>
    <div>
      <h1 className={styles.fluffy}>Egg-ceptional Omelette: Fluffy, Delicious, and Packed with Flavor!</h1>
      <div className={styles.imagecontainer}>
      <img src={image26} className={styles.idly}></img>
      </div>
      
      <div className={styles.recipescontainer}>
      <div className={styles.infoitem}>
        <h2>5</h2>
        <p>Ingredients</p>
      </div>
      <div className={styles.infoitem}>
        <h2>10</h2>
        <p>Minutes</p>
      </div>
      <div className={styles.infoitem}>
        <h2>250</h2>
        <p>KCal</p>
      </div>
     
    </div>
      <div className={styles.maincontainer}>
 
        <h2 className={styles.ingre}>Ingredients:</h2>
    
      <div className={styles.ing}>
        <ul className={styles.list}>
       <li> 2 large eggs</li>
<li>Salt and pepper to taste</li>
<li>1-2 tablespoons of milk (optional, for fluffiness)</li>
<li>1 tablespoon butter or oil</li>
<li>Optional fillings: cheese, chopped vegetables, herbs, or cooked meats</li>
        </ul>
      </div>
     <div className={styles.stepscontainer}>
   <h2 className={styles.steps}>Steps:</h2>
   <ul className={styles.idlysteps}>
 <li>Beat the Eggs: Crack the eggs into a bowl. Add a pinch of salt, pepper, and milk (if using). Whisk well until the mixture is smooth and slightly frothy.</li>

<li>Heat the Pan: Place a non-stick pan over medium heat. Add butter or oil and let it melt and coat the pan evenly.</li>

<li>Pour the Egg Mixture: Once the pan is hot, pour the egg mixture into the center of the pan and tilt the pan to spread the mixture evenly.</li>

<li>Cook the Eggs: Let the eggs cook undisturbed for about 1-2 minutes, or until the edges start to set. You can gently lift the edges with a spatula to let any uncooked eggs flow to the edges.</li>

<li>Add Fillings (Optional): If you want to add fillings like cheese, vegetables, or herbs, sprinkle them over one half of the omelette.</li>

<li>Fold and Serve: Once the omelette is set but still slightly soft in the center, carefully fold it in half using a spatula. Slide the omelette onto a plate and serve hot.</li>
   </ul>
   </div>
   </div>
   
   
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
    <li> Toast or Bread</li>

<li> Tomato Salsa or Chutney</li>
<li>Tea or Coffee</li>



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

export default Omlette