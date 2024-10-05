import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styles from './Idly.module.css'
import Image from '../Assets/ButterCream.jpeg'
import Statistics from './Statistics.js'

const Butterscotch = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Indulge in a Decadent Butterscotch Delight!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Butterscotch Dessert"/>
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
            <h2>350</h2>
            <p>Calories</p>
          </div>
        </div>

        <div className={styles.maincontainer}>
          <h2 className={styles.ingre}>Ingredients:</h2>
          <div className={styles.ing}>
            <ul className={styles.list}>
              <li>1 cup unsalted butter</li>
              <li>1 cup brown sugar</li>
              <li>1/4 cup granulated sugar</li>
              <li>2 cups heavy cream</li>
              <li>1 tsp vanilla extract</li>
              <li>1/2 tsp salt</li>
              <li>1/2 cup chopped pecans or walnuts (optional)</li>
              <li>Whipped cream for serving (optional)</li>
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Prepare the Caramel:
                <br/>In a saucepan, melt the butter over medium heat. Add the brown sugar and granulated sugar, stirring until dissolved.
              </li>
              <li>Simmering:
                <br/>Allow the mixture to simmer for about 5 minutes, stirring occasionally, until it thickens slightly.
              </li>
              <li>Adding Cream:
                <br/>Carefully add the heavy cream to the caramel, whisking continuously until fully combined. Bring the mixture to a gentle boil.
              </li>
              <li>Flavoring:
                <br/>Remove from heat and stir in the vanilla extract and salt. Let it cool slightly.
              </li>
              <li>Incorporating Nuts:
                <br/>If using, add the chopped pecans or walnuts to the caramel mixture and stir well.
              </li>
              <li>Serving:
                <br/>Serve warm over ice cream or as a topping for cakes, and add whipped cream if desired.
              </li>
            </ul>
          </div>
        </div>
        <div className="accompaniments">
          <h1 className={styles.accom}>Accompaniments</h1>
          <ul className={styles.sam}>
            <li> Vanilla Ice Cream</li>
            <li> Pancakes</li>
            <li> Brownies</li>
            <li> Fresh Fruit (optional)</li>
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

export default Butterscotch;
