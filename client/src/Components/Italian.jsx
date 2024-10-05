import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image33 from '../Images/image33.jpg'

const Italian = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "Italian Kitchen: Where Flavor Meets Tradition"
      </h1>
      <div className={styles.imagecontainer}>
        <img src={image33} className={styles.idly}></img>
      </div>

      <div className={styles.recipescontainer}>
        <div className={styles.infoitem}>
          <h2>6</h2>
          <p>Ingredients</p>
        </div>
        <div className={styles.infoitem}>
          <h2>75</h2>
          <p>Minutes</p>
        </div>
        <div className={styles.infoitem}>
          <h2>530</h2>
          <p>Calories</p>
        </div>
      </div>
      <div className={styles.maincontainer}>
        <h2 className={styles.ingre}>Ingredients:</h2>

        <div className={styles.ing}>
          <ul className={styles.list}>
            <li>400g spaghetti</li>
            <li>4 cloves garlic,thinly sliced</li>
            <li>1/2 cup extra virgin olive oil</li>
            <li>Freshparsley,chopped</li>
            <li>Grated Parmesancheese</li>
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Cook Pasta: In a large pot of boiling salted water, add spaghetti and cook according to package instructions until al dente. Reserve 1 cup of pasta water, then drain the rest.
            </li>
            <li>
            Prepare Sauce: In a large skillet, heat olive oil over medium heat. Add sliced garlic and red pepper flakes. Sauté until the garlic is golden brown but not burnt (about 2 minutes).
            </li>
            <li>
            Combine: Add the drained spaghetti to the skillet. Toss well to coat in the oil and garlic mixture.
            </li>
            <li>
            Adjust Consistency: If needed, add some reserved pasta water a little at a time to achieve the desired consistency.
            </li>
            <li>
            Garnish: Remove from heat, season with salt, and garnish with chopped parsley and grated Parmesan cheese before serving.
            </li>
           
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li>Roasted Red Potatoes with Rosemary and Garlic</li>

        <li>Classic Italian Caprese Salad</li>
        <li>Italian Sautéed Cabbage </li>

        <li>Italian Fried Eggplant</li>
      </ul>
      </div>

      <div>
        <h1 className={styles.notes}>
          Recipe Notes: Capture & Save Your Culinary Creations
        </h1>
        <textarea
          rows={25}
          columns={25}
          placeholder="Write your notes here..."
          className={styles.area}
        ></textarea>
      </div>
      <br></br>
      <br></br>
      <Statistics />
      <Footer />
    </div>
  </>
  );
}

export default Italian;
