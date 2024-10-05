import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import styles from './Idly.module.css'
import Image from '../Assets/BowlGlow.jpeg'
import Statistics from './Statistics.js'

const BowlGlow = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Glowing Bowl of Goodness: Nourish Your Body with a Wholesome Bowl Glow!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Bowl Glow"/>
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
            <p>Calories</p>
          </div>
        </div>

        <div className={styles.maincontainer}>
          <h2 className={styles.ingre}>Ingredients:</h2>
          <div className={styles.ing}>
            <ul className={styles.list}>
              <li>1 cup cooked quinoa</li>
              <li>1/2 cup roasted sweet potatoes</li>
              <li>1/2 cup sautéed kale</li>
              <li>1/4 cup diced cucumbers</li>
              <li>1/4 cup cherry tomatoes, halved</li>
              <li>1/4 avocado, sliced</li>
              <li>2 tbsp hummus</li>
              <li>1 tbsp tahini dressing</li>
              <li>1 tbsp pumpkin seeds</li>
              <li>1 tsp olive oil</li>
              <li>1 tsp lemon juice</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Preparing the Base:
                <br/>Cook quinoa according to the package instructions and let it cool slightly.
              </li>
              <li>Roasting the Sweet Potatoes:
                <br/>Toss the diced sweet potatoes in olive oil, salt, and pepper, and roast in the oven at 400°F (200°C) for 20-25 minutes or until golden.
              </li>
              <li>Sautéing the Kale:
                <br/>In a pan, sauté kale with olive oil and a pinch of salt until wilted but still vibrant.
              </li>
              <li>Assembling the Bowl:
                <br/>In a serving bowl, arrange quinoa, roasted sweet potatoes, sautéed kale, diced cucumbers, and cherry tomatoes.
              </li>
              <li>Adding the Toppings:
                <br/>Top with avocado slices, hummus, and drizzle with tahini dressing. Sprinkle pumpkin seeds on top.
              </li>
              <li>Final Touch:
                <br/>Add a squeeze of lemon juice and season with salt and pepper to taste.
              </li>
              <li>Serving:
                <br/>Serve the bowl immediately and enjoy a wholesome, vibrant meal!
              </li>
            </ul>
          </div>
        </div>

        <div className="accompaniments">
        <h1 className={styles.accom}>Accompaniments</h1>
        <ul className={styles.sam}>
          <li> Fresh Lemon Juice</li>
          <li> Greek Yogurt</li>
          <li> Roasted Almonds</li>
          <li> A side of Pita Bread</li>
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

export default BowlGlow;
