import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import styles from './Idly.module.css'
import Image from '../Assets/GreenSalad.jpeg'
import Statistics from './Statistics.js'

const Greensalad = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Fresh & Crunchy Green Salad: A Healthy Delight!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Green Salad"/>
        </div>

        <div className={styles.recipescontainer}>
          <div className={styles.infoitem}>
            <h2>10</h2>
            <p>Ingredients</p>
          </div>
          <div className={styles.infoitem}>
            <h2>20</h2>
            <p>Minutes</p>
          </div>
          <div className={styles.infoitem}>
            <h2>250</h2>
            <p>Calories</p>
          </div>
        </div>

        <div className={styles.maincontainer}>
          <h2 className={styles.ingre}>Ingredients:</h2>
          <div className={styles.ing}>
            <ul className={styles.list}>
              <li>1 cup mixed greens (spinach, lettuce, arugula)</li>
              <li>1/2 cup diced cucumbers</li>
              <li>1/4 cup finely chopped red onions</li>
              <li>1/4 cup halved cherry tomatoes</li>
              <li>1/2 cup boiled chickpeas</li>
              <li>2 tbsp olive oil</li>
              <li>1 tbsp lemon juice</li>
              <li>1 tsp salt</li>
              <li>1/2 tsp black pepper</li>
              <li>Fresh herbs (basil or parsley) for garnish</li>
              <li>Croutons for crunch (optional)</li>
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Preparation:
                <br/>Wash and chop the mixed greens, cucumbers, and tomatoes. Drain and rinse the chickpeas.
              </li>
              <li>Mixing the Base:
                <br/>In a large bowl, combine the mixed greens, cucumbers, red onions, cherry tomatoes, and chickpeas.
              </li>
              <li>Making the Dressing:
                <br/>In a small bowl, whisk together olive oil, lemon juice, salt, and black pepper.
              </li>
              <li>Combining:
                <br/>Drizzle the dressing over the salad and toss gently to coat the ingredients evenly.
              </li>
              <li>Final Touch:
                <br/>Garnish with fresh herbs and croutons if desired.
              </li>
              <li>Serving:
                <br/>Serve immediately for the freshest taste and enjoy!
              </li>
            </ul>
          </div>
        </div>
        <div className="accompaniments">
          <h1 className={styles.accom}>Accompaniments</h1>
          <ul className={styles.sam}>
            <li> Grilled Chicken</li>
            <li> Feta Cheese</li>
            <li> Balsamic Vinegar</li>
            <li> Avocado Slices (optional)</li>
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

export default Greensalad;
