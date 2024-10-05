import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styles from './Idly.module.css'
import Image from '../Assets/ChocolateCream.jpeg'
import Statistics from './Statistics.js'

const Chocolate = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Indulge in a Decadent Chocolate Delight!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Chocolate Dessert"/>
        </div>

        <div className={styles.recipescontainer}>
          <div className={styles.infoitem}>
            <h2>10</h2>
            <p>Ingredients</p>
          </div>
          <div className={styles.infoitem}>
            <h2>30</h2>
            <p>Minutes</p>
          </div>
          <div className={styles.infoitem}>
            <h2>400</h2>
            <p>Calories</p>
          </div>
        </div>

        <div className={styles.maincontainer}>
          <h2 className={styles.ingre}>Ingredients:</h2>
          <div className={styles.ing}>
            <ul className={styles.list}>
              <li>1 cup dark chocolate chips</li>
              <li>1/2 cup unsalted butter</li>
              <li>1 cup granulated sugar</li>
              <li>1/2 cup brown sugar</li>
              <li>3 large eggs</li>
              <li>1 tsp vanilla extract</li>
              <li>1 cup all-purpose flour</li>
              <li>1/2 cup cocoa powder</li>
              <li>1/2 tsp baking powder</li>
              <li>1/4 tsp salt</li>
              <li>Chocolate shavings for garnish (optional)</li>
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Preparation:
                <br/>Preheat your oven to 350°F (175°C) and grease a baking dish.
              </li>
              <li>Melt Chocolate and Butter:
                <br/>In a saucepan, melt the dark chocolate chips and butter over low heat, stirring until smooth.
              </li>
              <li>Mixing Sugars:
                <br/>Remove from heat and stir in granulated sugar and brown sugar until well combined.
              </li>
              <li>Adding Eggs and Vanilla:
                <br/>Add eggs one at a time, mixing well after each addition. Stir in vanilla extract.
              </li>
              <li>Combining Dry Ingredients:
                <br/>In a separate bowl, whisk together flour, cocoa powder, baking powder, and salt. Gradually fold into the chocolate mixture.
              </li>
              <li>Baking:
                <br/>Pour the batter into the prepared baking dish and bake for 25-30 minutes, or until a toothpick comes out clean.
              </li>
            </ul>
          </div>
        </div>
        <div className="accompaniments">
          <h1 className={styles.accom}>Accompaniments</h1>
          <ul className={styles.sam}>
            <li> Vanilla Ice Cream</li>
            <li> Whipped Cream</li>
            <li> Fresh Berries</li>
            <li> Chocolate Sauce</li>
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

export default Chocolate;
