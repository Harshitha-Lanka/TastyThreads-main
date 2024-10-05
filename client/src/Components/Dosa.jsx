import React from 'react'
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header.js'
import Footer from './Footer'
import image25 from '../Images/image25.jpg'


const Dosa = () => {
  return (
   <>
   <Header/>
    <div>
      <h1 className={styles.fluffy}>Delicious Dosa Delights: A Crisp and Flavorful Journey</h1>
      <div className={styles.imagecontainer}>
      <img src={image25} className={styles.idly}></img>
      </div>
      
      <div className={styles.recipescontainer}>
      <div className={styles.infoitem}>
        <h2>7</h2>
        <p>Ingredients</p>
      </div>
      <div className={styles.infoitem}>
        <h2>14</h2>
        <p>hours</p>
      </div>
      <div className={styles.infoitem}>
        <h2>100</h2>
        <p>Calories</p>
      </div>
     
    </div>
      <div className={styles.maincontainer}>
 
        <h2 className={styles.ingre}>Ingredients:</h2>
    
      <div className={styles.ing}>
        <ul className={styles.list}>
       

       <li>1 ½ cups raw rice</li>
<li>½ cup urad dal</li>
<li>2 tbsp chana dal</li>
<li>2 tbsp poha</li>
<li>¼ tsp fenugreek seeds</li>
<li>Salt</li>
<li>Water</li>
        </ul>
      </div>
     <div className={styles.stepscontainer}>
   <h2 className={styles.steps}>Steps:</h2>
   <ul className={styles.idlysteps}>
  <li> Make the Batter:

Soak rice, urad dal, chana dal, and fenugreek for 4-6 hours. Soak poha separately for 30 mins.
Grind everything with water until smooth. Add salt and let ferment for 8-10 hours.</li>
<li>Prepare Potato Filling (Optional):

Heat oil, add mustard, cumin, ginger, chili, and curry leaves.
Add onions, turmeric, salt, and mashed potatoes. Mix and set aside.</li>
<li>Make Dosa:

Heat a pan, pour a ladle of batter, and spread thinly.
Drizzle oil/ghee and cook until golden. Add potato filling if desired and fold.</li>
<li>Serve:

Serve hot with sambar and chutney. Enjoy!</li>
   </ul>
   </div>
   </div>
   
   
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
    <li> Sambar</li>

<li> Coconut Chutney</li>
<li> Potato Masala</li>

<li> Tomato Chutney</li>


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

export default Dosa