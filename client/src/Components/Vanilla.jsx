import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styles from './Idly.module.css'
import Image from '../Assets/VanillaCream.jpeg'
import Statistics from './Statistics.js'

const Vanilla = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Indulge in a Creamy Vanilla Delight!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Vanilla Dessert"/>
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
              <li>1 cup milk</li>
              <li>1 cup heavy cream</li>
              <li>1/2 cup granulated sugar</li>
              <li>2 large eggs</li>
              <li>1 tsp pure vanilla extract</li>
              <li>1/4 cup all-purpose flour</li>
              <li>1/2 tsp baking powder</li>
              <li>1/4 tsp salt</li>
              <li>1/2 cup vanilla frosting</li>
              <li>Fresh berries for garnish</li>
              <li>Mint leaves for garnish (optional)</li>
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Preparation:
                <br/>Preheat your oven to 350°F (175°C) and grease a baking dish.
              </li>
              <li>Mixing the Batter:
                <br/>In a mixing bowl, combine milk, heavy cream, sugar, and vanilla extract. Whisk until smooth.
              </li>
              <li>Adding Eggs:
                <br/>Add eggs one at a time, mixing well after each addition.
              </li>
              <li>Incorporating Dry Ingredients:
                <br/>Sift together flour, baking powder, and salt. Gradually fold into the wet mixture until just combined.
              </li>
              <li>Baking:
                <br/>Pour the batter into the prepared baking dish and bake for 25-30 minutes or until golden brown.
              </li>
              <li>Serving:
                <br/>Allow to cool slightly, then frost with vanilla frosting and garnish with fresh berries and mint leaves.
              </li>
            </ul>
          </div>
        </div>
        <div className="accompaniments">
          <h1 className={styles.accom}>Accompaniments</h1>
          <ul className={styles.sam}>
            <li> Whipped Cream</li>
            <li> Chocolate Sauce</li>
            <li> Fresh Fruit Salad</li>
            <li> Cookie Crumbs (optional)</li>
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

export default Vanilla;
