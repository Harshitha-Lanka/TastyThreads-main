import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image40 from '../Images/image40.jpg'

const Vibrant = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "Taste the Brightness: Explore Our Veggie Wonders"
      </h1>
      <div className={styles.imagecontainer}>
        <img src={image40} className={styles.idly}></img>
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
            <li>2 cups mixed vegetables (e.g., bell peppers, carrots, broccoli, zucchini, snap peas)</li>
            <li>1 tablespoon oil (olive oil, sesame oil, or your choice)</li>
            <li>2 cloves garlic, minced</li>
            <li>1-inch piece ginger, grated</li>
            <li>Salt and pepper to taste</li>
            <li>Chopped green onions or cilantro (for garnish)</li>
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Prepare Vegetables: Wash and chop your mixed vegetables into bite-sized pieces for even cooking.
              <br></br>
              Heat Oil: In a large pan or wok, heat the oil over medium-high heat.
            </li>
            <li>
            Sauté Aromatics: Add the minced garlic and grated ginger. Sauté for about 30 seconds until fragrant.
              <br></br>
              Add Vegetables: Add the mixed vegetables to the pan. Stir-fry for about 5-7 minutes, or until they are tender yet still crisp.
            </li>
            <li>
            Season: Drizzle the soy sauce over the vegetables. Stir well to coat and cook for an additional 1-2 minutes. Adjust salt and pepper to taste.
            </li>
            <li>
            Garnish: Remove from heat and sprinkle with sesame seeds and chopped green onions or cilantro.
            </li>
            <li>
            Serve: Serve hot as a side dish, or over rice or noodles for a complete meal.
          <br></br>
            </li>
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li>Rice</li>

        <li>Nodles</li>
        <li>Dips and Sauces</li>

        <li>salads</li>
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

export default Vibrant;
