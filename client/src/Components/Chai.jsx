import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image35 from '../Images/image35.jpg'

const chai = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "Warm Up with Our Authentic Chai Brews"
      </h1>
      <div className={styles.imagecontainer}>
        <img src={image35} className={styles.idly}></img>
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
            <li>1 cup water</li>
            <li>1 cup milk (or plant-based milk)</li>
            <li>1-2 teaspoons loose black tea or 1 tea bag</li>
            <li>1-2 teaspoons loose black tea or 1 tea bag</li>
            <li>Sweetener to taste (sugar, honey, or jaggery)</li>
            <li>Spices (1-2 slices of fresh ginger,cardamom,cloves,black peppercorns)</li>
            
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Boil Water: In a saucepan, bring the water to a boil.
            </li>
            <li>
            Add Spices: Once boiling, add your spices. Let them simmer for about 2-3 minutes to release their flavors.
            </li>
            <li>
            Add Tea: Add the loose black tea or tea bag to the boiling water. Let it steep for about 2-3 minutes.
            </li>
            <li>Add Milk: Pour in the milk and bring the mixture back to a boil.<br></br>
            Sweeten: Add your desired sweetener and stir well. Adjust the sweetness to your liking.<br></br>
             
            </li>
            <li>
            Strain: Once it reaches your preferred strength and sweetness, strain the chai into cups using a fine mesh sieve to remove the tea leaves and spice.<br></br>
            </li>
            <li>
            Serve: Enjoy your hot chai, possibly with a snack or some biscuits!
            </li>
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li>Biscuits</li>

        <li>Cookies</li>
        <li>Samosa</li>

        <li>Pakoras</li>
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

export default chai;
