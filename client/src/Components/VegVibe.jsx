import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import styles from './Idly.module.css'
import Image from '../Assets/VeggieVibes.jpeg'
import Statistics from './Statistics.js'

const VegVibe = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Veggie Vibes: A Colorful and Wholesome Plant-Powered Bowl!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Veggie Vibes Bowl"/>
        </div>

        <div className={styles.recipescontainer}>
          <div className={styles.infoitem}>
            <h2>12</h2>
            <p>Ingredients</p>
          </div>
          <div className={styles.infoitem}>
            <h2>25</h2>
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
              <li>1/2 cup steamed broccoli</li>
              <li>1/4 cup chopped red bell peppers</li>
              <li>1/4 cup cherry tomatoes, halved</li>
              <li>1/4 avocado, sliced</li>
              <li>2 tbsp hummus</li>
              <li>1 tbsp olive oil</li>
              <li>1 tbsp lemon juice</li>
              <li>1 tsp tahini dressing</li>
              <li>Salt and pepper to taste</li>
              <li>Fresh parsley for garnish</li>
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Preparing the Quinoa:
                <br/>Cook the quinoa according to the package instructions and set aside to cool slightly.
              </li>
              <li>Roasting the Sweet Potatoes:
                <br/>Toss the sweet potatoes in olive oil, salt, and pepper, and roast at 400°F (200°C) for 20-25 minutes until golden.
              </li>
              <li>Steaming the Broccoli:
                <br/>Steam the broccoli until tender but still vibrant green, about 5-7 minutes.
              </li>
              <li>Assembling the Bowl:
                <br/>In a large bowl, add the cooked quinoa as the base, followed by the roasted sweet potatoes, steamed broccoli, chopped red bell peppers, and cherry tomatoes.
              </li>
              <li>Adding Toppings:
                <br/>Top with avocado slices, a dollop of hummus, and drizzle with tahini dressing.
              </li>
              <li>Final Touch:
                <br/>Garnish with fresh parsley, and add a squeeze of lemon juice. Season with salt and pepper to taste.
              </li>
              <li>Serving:
                <br/>Serve immediately for a fresh, vibrant, and nourishing veggie bowl.
              </li>
            </ul>
          </div>
        </div>

        <div className="accompaniments">
        <h1 className={styles.accom}>Accompaniments</h1>
        <ul className={styles.sam}>
          <li> A side of Greek Yogurt</li>
          <li> Roasted Almonds</li>
          <li> Whole Grain Pita</li>
          <li> Fresh Lemon Wedges</li>
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

export default VegVibe;
