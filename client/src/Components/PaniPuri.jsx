import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styles from './Idly.module.css'
import Image from '../Assets/Pani Puri.jpeg'
import Statistics from './Statistics.js'

const PaniPuri = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Pani Puri: A Tangy, Spicy Delight You Can't Resist!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Pani Puri"/>
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
            <h2>150</h2>
            <p>Calories</p>
          </div>
        </div>

        <div className={styles.maincontainer}>
          <h2 className={styles.ingre}>Ingredients:</h2>
          <div className={styles.ing}>
            <ul className={styles.list}>
              <li>20-25 puris (crispy hollow puri shells)</li>
              <li>1 cup boiled and mashed potatoes</li>
              <li>1/2 cup boiled chickpeas</li>
              <li>1/4 cup finely chopped onions</li>
              <li>1/4 cup finely chopped coriander leaves</li>
              <li>2 tbsp tamarind chutney</li>
               
              
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Prepare the Filling:
                <br/>In a bowl, mix the boiled and mashed potatoes with boiled chickpeas, chaat masala, roasted cumin powder, red chili powder, and salt. Stir well and set aside.
              </li>
              <li>Prepare the Pani (Spicy Water):
                <br/>In a blender, blend together mint leaves, coriander leaves, green chili, cumin seeds, and lemon juice with a little water. Strain the mixture and add cold water to make the pani. Season with black salt and adjust spices to taste.
              </li>
              <li>Assemble the Pani Puri:
                <br/>Gently crack the top of each puri to make a hole. Fill each puri with the potato-chickpea mixture, a little tamarind chutney, and chopped onions.
              </li>
              <li>Serving:
                <br/>Dip the stuffed puris into the prepared pani and serve immediately for a burst of tangy, spicy flavors.
              </li>
            </ul>
          </div>
        </div>

        <div className="accompaniments">
        <h1 className={styles.accom}>Accompaniments</h1>
        <ul className={styles.sam}>
          <li>Extra Tamarind Chutney</li>
          <li>Sweet Yogurt</li>
          <li>Sev (optional)</li>
        </ul>
        </div>

        <div>
          <h1 className={styles.notes}>Recipe Notes: Capture & Save Your Culinary Creations</h1>
          <textarea rows={25} columns={25} placeholder='Write your notes here...' className={styles.area}></textarea>
        </div>
        <br/><br/>
        <Statistics/>
        <Footer/>
      </div>
    </>
  )
}

export default PaniPuri;
