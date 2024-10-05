import React from 'react'
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image29 from '../Images/image29.jpg'

const Gulabjamun = () => {
  return (
    <>
    <Header/>
    <div>
      <h1 className={styles.fluffy}>Golden Delights: Irresistible Gulab Jamun Bliss!</h1>
      <div className={styles.imagecontainer}>
      <img src={image29} className={styles.idly}></img>
      </div>
      
      <div className={styles.recipescontainer}>
      <div className={styles.infoitem}>
        <h2>6</h2>
        <p>Ingredients</p>
      </div>
      <div className={styles.infoitem}>
        <h2>30</h2>
        <p>Minutes</p>
      </div>
      <div className={styles.infoitem}>
        <h2>180</h2>
        <p>Kcal</p>
      </div>
     
    </div>
      <div className={styles.maincontainer}>
 
        <h2 className={styles.ingre}>Ingredients:</h2>
    
      <div className={styles.ing}>
        <ul className={styles.list}>
       <li> Gulab Jamun Mix: 1 cup (or Khoya - 1 cup)</li>
      <li>Milk: 2-3 tablespoons (for kneading)</li>
      <li>Sugar: 1 cup</li>
      <li>Water: 1.5 cups</li>
      <li>Cardamom Powder: 1/4 teaspoon</li>
      <li>Oil/Ghee: for frying</li>
        </ul>
      </div>
     <div className={styles.stepscontainer}>
   <h2 className={styles.steps}>Steps:</h2>
   <ul className={styles.idlysteps}>
   <li>Make Dough: Mix Gulab Jamun mix with milk to form a smooth dough.</li>
   <li>Shape Balls: Make small, smooth balls without cracks.</li>
   <li>Prepare Sugar Syrup: Boil sugar and water until syrupy; add cardamom powder.</li>
   <li>Fry: Deep fry the balls on low heat until golden brown.</li>
   <li>Soak in Syrup: Add fried gulab jamuns to warm syrup and let them soak for 2 hours.</li>
   <li>Serve: Serve warm or chilled.</li>
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

export default Gulabjamun