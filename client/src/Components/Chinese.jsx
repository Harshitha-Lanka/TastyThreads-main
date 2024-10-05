import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image34 from '../Images/image34.jpg'


const Chinese = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "Chinese Kitchen: Explore the Rich Tapestry of Flavors"
      </h1>
      <div className={styles.imagecontainer}>
        <img src={image34} className={styles.idly}></img>
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
            <li>500g chicken breast, diced</li>
            <li>3 tablespoons soy sauce</li>
            <li>2 tablespoons rice vinegar</li>
            <li>1 tablespoon cornstarch</li>
            <li>2 tablespoons vegetable oil</li>
            <li>1/2 cup roasted peanuts</li>
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Marinate Chicken: In a bowl, combine chicken, 1 tablespoon soy sauce, rice vinegar, and cornstarch. Let it marinate for 15-30 minutes.            </li>
            <li>
            Heat Oil: In a large wok, heat vegetable oil over medium-high heat. Add dried chilies and stir-fry for about 30 seconds.
            </li>
            <li>
            Cook Chicken: Add the marinated chicken to the wok and cook until browned and cooked through.
            </li>
            <li>
            Add Vegetables: Add bell pepper, garlic, and ginger, stirring until fragrant and tender.            </li>
            <li>
            Finish with Peanuts: Stir in the remaining soy sauce and roasted peanuts. Mix well to combine.
            </li>
            <li>
            Serve: Serve hot, garnished with chopped green onions, alongside steamed rice.
            </li>
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li>Garlic Broccoli Stir Fry</li>

        <li>Chinese Mustard Greens</li>
        <li>Crispy Sesame Tofu</li>

        <li>Scallion Pancakes</li>
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

export default Chinese;
