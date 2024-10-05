import React from 'react'
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image27 from '../Images/image27.jpg'

const Omlette = () => {
  return (
    <>
    <Header/>
    <div>
      <h1 className={styles.fluffy}>Paneer Perfection: Creamy, Dreamy Delight!</h1>
      <div className={styles.imagecontainer}>
      <img src={image27} className={styles.idly}></img>
      </div>
      
      <div className={styles.recipescontainer}>
      <div className={styles.infoitem}>
        <h2>12</h2>
        <p>Ingredients</p>
      </div>
      <div className={styles.infoitem}>
        <h2>30</h2>
        <p>Minutes</p>
      </div>
      <div className={styles.infoitem}>
        <h2>300</h2>
        <p>KCal</p>
      </div>
     
    </div>
      <div className={styles.maincontainer}>
 
        <h2 className={styles.ingre}>Ingredients:</h2>
    
      <div className={styles.ing}>
        <ul className={styles.list}>
        <li>200g Paneer (cubed)</li>
    <li>2 tbsp Oil or Ghee</li>
    <li>1 Onion (finely chopped)</li>
    <li>2 Tomatoes (pureed)</li>
    <li>1 tsp Ginger-Garlic Paste</li>
    <li>1/2 tsp Turmeric Powder</li>
    <li>1/2 tsp Red Chili Powder</li>
    <li>1/2 cup Fresh Cream or Yogurt</li>
    <li>Salt (to taste)</li>
        </ul>
      </div>
     <div className={styles.stepscontainer}>
   <h2 className={styles.steps}>Steps:</h2>
   <ul className={styles.idlysteps}>
  <li> Heat oil in a pan, add chopped onions and sauté until golden.</li>
<li>Add ginger-garlic paste and sauté for another minute.</li>
<li>Add tomato puree, turmeric, red chili powder, and coriander powder. Cook until oil separates.</li>
<li>Add paneer cubes, salt, and garam masala. Mix well.</li>
<li>Pour in cream or yogurt, cook for 5-7 minutes until curry thickens.</li>
<li>Garnish with coriander leaves and serve hot.</li>
   </ul>
   </div>
   </div>
   
   
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
     <li> Naan (Garlic, Butter, or Plain)</li>
     <li>Jeera Rice (Cumin Rice)</li>
     <li>Kachumber Salad (Finely chopped onion, tomato, cucumber, and carrot with lime and coriander)</li>
     <li>Boondi Raita</li>



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