import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image36 from '../Images/image36.jpg'

const lassy = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "Chill Out with Our Signature Lassi Blends"
      </h1>
      <div className={styles.imagecontainer}>
        <img src={image36} className={styles.idly}></img>
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
            <li>1 cup plain yogurt</li>
            <li>1/2 cup water (or milk for creaminess)</li>
            <li>2-4 tablespoons sugar (adjust to taste)</li>
            <li>1/4 teaspoon ground cardamom (optional)</li>
            <li>Ice cubes (optional)</li>
            <li>Chopped mint leaves or fruit for garnish (optional</li>
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Blend Yogurt: In a blender, add the yogurt.<br></br>
            Add Liquid: Pour in the water (or milk) to achieve your desired consistency.
            </li>
            <li>
            Sweeten: Add sugar to taste. You can also add ground cardamom for extra flavor.
            </li>
            <li>
            Blend: Blend the mixture until smooth and frothy. If you prefer a chilled lassi, add ice cubes while blending.
            </li>
            <li>
            Taste and Adjust: Taste the lassi and adjust sweetness or spices if needed.
              <br></br>
              Serve: Pour into glasses and garnish with chopped mint leaves or a sprinkle of cardamom.
            </li>
            <li>
            Enjoy: Serve immediately and enjoy your refreshing lassi!<br></br>
            </li>
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li>Biryani</li>

        <li>Curries</li>
        <li>Pannner Tikka</li>

        <li>Naan</li>
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

export default lassy;
