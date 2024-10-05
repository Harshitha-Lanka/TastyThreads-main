import React from 'react'
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image30 from '../Images/image30.jpg'

const Jalebi = () => {
  return (
    <>
    <Header/>
    <div>
      <h1 className={styles.fluffy}>Swirls of Sweetness: Crispy & Syrupy Jalebi Treats!</h1>
      <div className={styles.imagecontainer}>
      <img src={image30} className={styles.idly}></img>
      </div>
      
      <div className={styles.recipescontainer}>
      <div className={styles.infoitem}>
        <h2>8</h2>
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
       <li> All-Purpose Flour (Maida): 1 cup</li>
       <li>Cornflour: 2 tablespoons</li>
       <li>Yogurt: 1/4 cup</li>
       <li>Baking Powder: 1/4 teaspoon</li>
       <li>Water: as needed (to make a smooth batter)</li>
       <li>Saffron or Yellow Food Color: a pinch</li>
       <li>Sugar: 1 cup (for syrup)</li>
       <li>Water: 1/2 cup (for syrup)</li>
      
       <li>Ghee/Oil: for frying</li>
        </ul>
      </div>
     <div className={styles.stepscontainer}>
   <h2 className={styles.steps}>Steps:</h2>
   <ul className={styles.idlysteps}>
 <li> Make Batter: Mix flour, cornflour, yogurt, baking powder, and food color with water to form a smooth batter. Let it rest for 30 minutes.</li>
 <li> Prepare Sugar Syrup: Boil sugar and water until it reaches a one-string consistency. Add cardamom powder and keep warm.</li>
 <li> Fill & Shape Jalebis: Fill the batter into a piping bag or squeeze bottle. Pipe spirals into hot oil or ghee.</li>
 <li> Fry: Fry on medium heat until crispy and golden.</li>
 <li> Soak in Syrup: Immediately soak fried jalebis in warm syrup for a few seconds.</li>
 <li> Serve: Serve warm for the best taste.</li>
   </ul>
   </div>
   </div>
   
   
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
     <li> Rabri: Thickened sweetened milk with nuts.</li>
     <li>Plain Milk: Serve jalebis with a glass of warm milk.</li>
     <li>Curd: Traditionally served with curd for a sweet and tangy combination.</li>

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

export default Jalebi