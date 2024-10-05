import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Idly.module.css";
import image22 from "../Images/image22.jpg";
// import image23 from '../Images/image23.png'
import Statistics from "./Statistics.js";
// import image24 from '../Images/image24.png'

const Idly = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className={styles.fluffy}>
          Fluffy Bites of Tradition: Start Your Day with Soft, Steamed Idlies!
        </h1>
        <div className={styles.imagecontainer}>
          <img src={image22} className={styles.idly}></img>
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
              <li> 1 cup rice</li>
              <li>1/2 cup urad dal (split black gram)</li>
              <li>1/4 teaspoon fenugreek seeds</li>
              <li>Salt to taste</li>
              <li>Water (for soaking and grinding)</li>
              <li>Oil (for greasing the idli plates)</li>
            </ul>
          </div>
          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>
                Soaking: Rinse the urad dal, fenugreek seeds, and poha
                thoroughly under running water.<br></br>
                Soak the urad dal and fenugreek seeds in enough water for 6-8
                hours.<br></br>
                Similarly, rinse and soak the idly rice separately in another
                bowl for 6-8 hours.
              </li>
              <li>
                Grinding: After soaking, drain the water from the urad dal and
                rice.<br></br>
                Grind the urad dal and fenugreek seeds in a wet grinder or mixer
                with a little water until it becomes a smooth, fluffy batter.
                <br></br>
                Next, grind the soaked idly rice into a slightly coarse paste,
                adding water gradually.<br></br>
                Combine the urad dal and rice batter in a large bowl. Add salt
                and mix well until they are thoroughly combined.
              </li>
              <li>
                Fermentation: Cover the bowl and let the batter ferment
                overnight or for 8-12 hours in a warm place. The batter should
                rise and double in volume.<br></br>
                After fermentation, gently mix the batter without disturbing it
                too much.
              </li>
              <li>
                Steaming: Grease the idly molds with a little oil to prevent
                sticking.<br></br>
                Pour the batter into each mold, filling about 3/4 of the way.
                <br></br>
                Place the filled idly mold in a steamer and steam for 10-15
                minutes on medium heat. Check by inserting a toothpick; if it
                comes out clean, the idlis are done.<br></br>
                Remove from the steamer and let it cool slightly before
                demolding.
              </li>
              <li>
                Serving: Serve the hot idlis with coconut chutney, sambar, or
                any chutney of your choice.<br></br>
              </li>
            </ul>
          </div>
        </div>
        <div className="accomp">
        <h1 className={styles.accom}>Accompaniments</h1>
        <ul className={styles.sam}>
          <li> Sambar</li>

          <li> Coconut Chutney</li>
          <li> Onion Chutney</li>

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
};

export default Idly;
