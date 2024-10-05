import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styles from './Idly.module.css'
import Image from '../Assets/Samosa.jpeg'
import Statistics from './Statistics.js'

const Samosa = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Crispy & Delicious Samosa: A Perfect Tea-Time Snack!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Samosa"/>
        </div>

        <div className={styles.recipescontainer}>
          <div className={styles.infoitem}>
            <h2>10</h2>
            <p>Ingredients</p>
          </div>
          <div className={styles.infoitem}>
            <h2>45</h2>
            <p>Minutes</p>
          </div>
          <div className={styles.infoitem}>
            <h2>300</h2>
            <p>Calories</p>
          </div>
        </div>

        <div className={styles.maincontainer}>
          <h2 className={styles.ingre}>Ingredients:</h2>
          <div className={styles.ing}>
            <ul className={styles.list}>
              <li>For the Dough:
                <ul>
                  <li>2 cups all-purpose flour</li>
                  <li>1/4 cup oil or ghee</li>
                  <li>1/2 tsp carom seeds (ajwain)</li>
                  <li>Water (as needed)</li>
                  <li>Salt to taste</li>
                </ul>
              </li>
              <li>For the Filling:
                <ul>
                  <li>2 cups boiled and mashed potatoes</li>
                  <li>1/2 cup boiled green peas</li>
                 
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Prepare the Dough:
                <br/>In a large mixing bowl, add the flour, carom seeds, salt, and oil or ghee. Mix well. Add water gradually and knead into a stiff dough. Cover with a damp cloth and let it rest for 30 minutes.
              </li>
              <li>Prepare the Filling:
                <br/>Heat a little oil in a pan. Add cumin seeds and let them splutter. Add mashed potatoes, peas, turmeric, coriander powder, red chili powder, garam masala, chaat masala, and amchur. Cook for a few minutes. Garnish with fresh coriander leaves. Let the mixture cool down.
              </li>
              <li>Shape the Samosas:
                <br/>Divide the dough into equal portions and roll each portion into a ball. Roll the dough into a thin oval shape, cut it in half, and form a cone. Stuff the cone with the prepared filling and seal the edges by applying water.
              </li>
              <li>Frying:
                <br/>Heat oil in a deep frying pan over medium heat. Fry the samosas until they turn golden brown and crispy. Drain on a paper towel to remove excess oil.
              </li>
              <li>Serving:
                <br/>Serve the hot samosas with tamarind chutney, mint chutney, or ketchup.
              </li>
            </ul>
          </div>
        </div>
        <div className="accompaniments">
          <h1 className={styles.accom}>Accompaniments</h1>
          <ul className={styles.sam}>
            <li> Tamarind Chutney</li>
            <li> Mint Chutney</li>
            <li> Ketchup</li>
            <li> Sweet Yogurt (optional)</li>
          </ul>
        </div>

        <div>
          <h1 className={styles.notes}>Recipe Notes: Capture & Save Your Culinary Creations</h1>
          <textarea rows={25} columns={25} placeholder='Write your notes here...' className={styles.area}></textarea>
        </div>
        <br/><br/>
        <Statistics/>
        <Footer/>
      </div>
    </>
  )
}

export default Samosa;
