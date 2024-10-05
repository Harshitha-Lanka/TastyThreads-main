import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image37 from '../Images/image37.jpg'

const Buttermilk = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "Cool Down with Our Signature Buttermilk Blends"
      </h1>
      <div className={styles.imagecontainer}>
        <img src={image37} className={styles.idly}></img>
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
            <li>1 cup cold water</li>
            <li>Salt to taste (optional)</li>
            <li>Spices or herbs (optional, e.g., cumin powder, mint leaves)</li>
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Blend Yogurt: In a blender, add the plain yogurt.<br></br>
            Add Liquid: Pour in the cold water (or milk) to reach your desired consistency.
            </li>
            <li>
            Combine Yogurt and Water: In a mixing bowl or a blender, add 1 cup of plain yogurt and 1 cup of cold water.
            <br></br>
            Whisk or Blend: Use a whisk or blender to mix the yogurt and water until smooth and well combined. If using a blender, blend for just a few seconds to avoid over-mixing.            </li>
            <li>
            Adjust Consistency: If you prefer a thinner consistency, you can add more water and blend again.
            </li>
            <li>
            Add Salt and Spices: Taste and add salt as needed. You can also add spices like roasted cumin powder or fresh herbs like mint for extra flavor.
            </li>
            <li>
            Serve: Pour the buttermilk into glasses and serve chilled.<br></br>
            </li>
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li>Rice Dishes</li>

        <li>Curries</li>
        <li>Roti/Chapati</li>

        <li>Kachumber</li>
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

export default Buttermilk;
