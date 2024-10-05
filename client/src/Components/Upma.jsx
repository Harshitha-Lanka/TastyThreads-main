import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image39 from '../Images/image39.jpg'

const upma = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "Upma Magic: Simple, Nutritious, and Delicious"
      </h1>
      <div className={styles.imagecontainer}>
        <img src={image39} className={styles.idly}></img>
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
            <li>1 cup semolina (rava or sooji)</li>
            <li>2 tablespoons oil or ghee</li>
            <li>1 teaspoon mustard seeds</li>
            <li>1 onion, finely chopped</li>
            <li>Chopped vegetables (e.g., carrots, peas, bell peppers, optional)</li>
            <li>Fresh coriander leaves, chopped (for garnish)</li>
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Roast Semolina: In a dry pan, lightly roast the semolina on medium heat until it turns slightly golden and aromatic. Stir continuously to avoid burning. Remove and set aside.<br></br>
            Heat Oil: In the same pan, heat oil or ghee. Add mustard seeds and let them splutter.
            </li>
            <li>
            Add Lentils: If using, add urad dal and chana dal. Sauté until they turn golden brown.
              <br></br>
              Sauté Onions and Chilies: Add the chopped onion, green chilies, and grated ginger. Sauté until the onions are translucent.
            </li>
            <li>
            Add Vegetables: If you’re adding vegetables, toss them in and sauté for a few minutes until they soften.
            </li>
            <li>
            Add Water: Pour in the water and add salt. Bring the mixture to a boil.
              <br></br>
              Add Semolina: Gradually add the roasted semolina to the boiling water, stirring continuously to avoid lumps.
              <br></br>
              Cook: Reduce the heat to low, cover, and cook for about 2-3 minutes, stirring occasionally, until the upma absorbs the water and reaches your desired consistency
            </li>
            <li>
            Garnish: Turn off the heat and garnish with chopped coriander leaves.
            <br></br>
            </li>
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li> Sambar</li>

        <li> Coconut Chutney</li>
        <li>Sugar</li>

        <li> Tomato Chutney</li>
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

export default upma;
