import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Statistics from './Statistics'
import image3 from '../Images/image3.jpg'
import styles from './Idly.module.css'

const Biryani = () => {
  return (
    <>
    <Header/>
    <div>
      <h1 className={styles.fluffy}>Royal Feast: Aromatic Biryani Bliss</h1>
      <div className={styles.imagecontainer}>
      <img src={image3} className={styles.idly}></img>
      </div>
      
      <div className={styles.recipescontainer}>
      <div className={styles.infoitem}>
        <h2>7</h2>
        <p>Ingredients</p>
      </div>
      <div className={styles.infoitem}>
        <h2>1</h2>
        <p>Hour</p>
      </div>
      <div className={styles.infoitem}>
        <h2>400</h2>
        <p>Kcal</p>
      </div>
     
    </div>
      <div className={styles.maincontainer}>
 
        <h2 className={styles.ingre}>Ingredients:</h2>
    
      <div className={styles.ing}>
        <ul className={styles.list}>
        <li>Basmati Rice: 1 cup</li>
        <li>Chicken/Paneer: 300 grams</li>
        <li>Onion: 1 large, sliced</li>
        <li>Tomato: 1, chopped</li>
        <li>Yogurt: 1/4 cup</li>
        <li>Biryani Masala: 1 tablespoon</li>
        <li>Salt & Oil: as needed</li>
      
        </ul>
      </div>
     <div className={styles.stepscontainer}>
   <h2 className={styles.steps}>Steps:</h2>
   <ul className={styles.idlysteps}>
  <li> Cook Rice: Boil rice until 70% cooked and set aside.</li>
  <li>Sauté Onions: Fry onions until golden and set some aside for garnish.</li>
  <li>Cook Chicken/Paneer: Add chicken/paneer with salt and biryani masala. Cook for 5 minutes.</li>
  <li>Mix in Tomatoes & Yogurt: Add chopped tomatoes and yogurt. Cook until oil separates.</li>
  <li>Layer with Rice: Layer rice over the chicken mixture.</li>
  <li>Simmer: Cover and cook on low heat for 15 minutes.</li>
  <li>Garnish & Serve: Top with fried onions and serve hot.</li>
   </ul>
   </div>
   </div>
   
   
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
     <li> Raita</li>
     <li>Pickle</li>
     <li> Mint or corriander Chutney</li>


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

export default Biryani