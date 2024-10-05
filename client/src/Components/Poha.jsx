import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image38 from '../Images/image38.jpg'

const poha = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "A Taste of Tradition: Experience Authentic Poha"

      </h1>
      <div className={styles.imagecontainer}>
        <img src={image38} className={styles.idly}></img>
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
            <li>1 cup flattened rice (poha)</li>
            <li>1 medium onion, chopped</li>
            <li>1-2 green chilies, chopped (adjust to taste)</li>
            <li>1/2 teaspoon mustard seeds</li>
            <li>1/2 teaspoon turmeric powder</li>
            <li>Salt to taste</li>
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Rinse Poha: Place the flattened rice in a sieve and rinse it under cold water. Drain and set aside for about 10 minutes to soften.
              <br></br>
              Heat Oil: In a pan, heat oil over medium heat. Add mustard seeds and let them splutter.
            </li>
            <li>
            Add Onions and Chilies: Add the chopped onions and green chilies. Sauté until the onions become translucent.
              <br></br>
              Add Potatoes: If using, add the diced potatoes. Cook for about 5-7 minutes, stirring occasionally, until the potatoes are tender.
            </li>
            <li>
            Add Spices: Sprinkle in turmeric powder and salt. Stir to combine.
            </li>
            <li>
            Mix in Poha: Add the softened poha to the pan. Gently mix everything together, being careful not to break the poha.
              <br></br>
              Cook: Cook for an additional 2-3 minutes, stirring gently to heat through.
            </li>
            <li>
            Garnish: Turn off the heat and garnish with chopped coriander leaves and peanuts, if desired.
            <br></br>Serve: Serve hot with lemon wedges on the side for a zesty kick.
            </li>
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li>Green Chutney</li>

        <li>Tamarind Chutney</li>
        <li>Lemon Wedges</li>

        <li>Pappadums</li>
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

export default poha;
