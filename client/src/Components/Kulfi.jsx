import React from 'react'
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image31 from '../Images/image31.jpg'

const Kulfi = () => {
  return (
    <>
    <Header/>
    <div>
      <h1 className={styles.fluffy}>Creamy Dream: Indulgent Kulfi Magic!</h1>
      <div className={styles.imagecontainer}>
      <img src={image31} className={styles.idly}></img>
      </div>
      
      <div className={styles.recipescontainer}>
      <div className={styles.infoitem}>
        <h2>8</h2>
        <p>Ingredients</p>
      </div>
      <div className={styles.infoitem}>
        <h2>8</h2>
        <p>Hours</p>
      </div>
      <div className={styles.infoitem}>
        <h2>250</h2>
        <p>Kcal</p>
      </div>
     
    </div>
      <div className={styles.maincontainer}>
 
        <h2 className={styles.ingre}>Ingredients:</h2>
    
      <div className={styles.ing}>
        <ul className={styles.list}>
       <li> Full-Fat Milk: 4 cups</li>
       <li>Sugar: 1/2 cup</li>
       <li>Condensed Milk: 1/4 cup</li>
       <li>Cardamom Powder: 1/2 teaspoon</li>
       <li>Saffron Strands: a pinch (optional)</li>
       <li>Chopped Nuts: 2 tablespoons (almonds, pistachios)</li>
       <li>Cornflour: 1 tablespoon (mixed in 2 tablespoons of milk)</li>
       <li>Rose Water: 1/2 teaspoon (optional)</li>
        </ul>
      </div>
     <div className={styles.stepscontainer}>
   <h2 className={styles.steps}>Steps:</h2>
   <ul className={styles.idlysteps}>
  <li> Boil Milk: In a heavy-bottomed pan, boil the milk on low heat until it reduces to half.</li>
  <li>Add Condensed Milk & Sugar: Stir in condensed milk and sugar. Cook for another 10-15 minutes.</li>
  <li>Add Cornflour Mixture: Add the cornflour-milk mixture to thicken. Stir continuously for 5 minutes.</li>
  <li>Flavor with Cardamom & Saffron: Add cardamom powder, saffron strands, and chopped nuts. Cook for 5 more minutes.</li>
  <li>Cool & Pour: Remove from heat, let it cool slightly, then pour into kulfi molds.</li>
  <li>Freeze: Freeze for 6-8 hours or overnight until set.</li>
  <li>Serve: Unmold, garnish with extra nuts, and serve chilled.</li>
   </ul>
   </div>
   </div>
   
   
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
      <li>Falooda: Serve with sweet vermicelli and rose syrup.</li>
      <li>Chopped Fruits: Mangoes or strawberries for a fruity twist.</li>
      <li>Drizzle: A drizzle of chocolate syrup or rose syrup for extra flavor.</li>

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

export default Kulfi