import React from 'react';
import styles from './Idly.module.css'
import Statistics from './Statistics'
import Header from './Header'
import Footer from './Footer'
import image32 from '../Images/image32.jpg'
const Indian = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className={styles.fluffy}>
      "Indian Cuisine: A Symphony of Taste and Tradition"
      </h1>
      <div className={styles.imagecontainer}>
        <img src={image32} className={styles.idly}></img>
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
            <li>1 can chickpeas</li>
            <li>1 onion,chopped</li>
            <li>2tomatoes,chopped</li>
            <li>2 green chilies,slit</li>
            <li>1 tablespoon ginger-garlic paste</li>
            <li>2 teaspoons chana masala powder</li>
          </ul>
        </div>
        <div className={styles.stepscontainer}>
          <h2 className={styles.steps}>Steps:</h2>
          <ul className={styles.idlysteps}>
            <li>
            Heat Oil: In a pan, heat oil over medium heat. Add cumin seeds and let them splutter.
                  </li>
            <li>
            Sauté Onions: Add chopped onions and green chilies. Sauté until golden brown.
              </li>
            <li>
            Add Tomatoes and Spices: Add chopped tomatoes, green chilies, and biryani masala. Cook until tomatoes soften.
            </li>
            <li>
            Add Water and Rice: Add water and bring it to a boil. Drain soaked rice and add it to the pot.
            </li>
            <li>
            Simmer: Cover and cook on low heat until the rice is cooked and water is absorbed (about 20 minutes).
            </li>
            <li>
            Garnish: Fluff the biryani and garnish with fried onions, coriander, and mint leaves before serving.
            </li>
            
          </ul>
        </div>
      </div>
      <div className="accomp">
      <h1 className={styles.accom}>Accompaniments</h1>
      <ul className={styles.sam}>
        <li> Rice Dishes</li>

        <li>Indian Breads</li>
        

        <li>Pickles and Chutneys</li>
        <li>Lemon Wedges</li>
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

export default Indian;
