import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styles from './Idly.module.css'
import Image from '../Assets/Chaat.jpeg'
import Statistics from './Statistics.js'

const Chat = () => {
  return (
    <>
      <Header/>
      <div>
        <h1 className={styles.fluffy}>Spice Up Your Snack Time: Dive Into a Tangy Masala Chaat Delight!</h1>
        <div className={styles.imagecontainer}>
          <img src={Image} className={styles.idly} alt="Masala Chaat"/>
        </div>

        <div className={styles.recipescontainer}>
          <div className={styles.infoitem}>
            <h2>10</h2>
            <p>Ingredients</p>
          </div>
          <div className={styles.infoitem}>
            <h2>20</h2>
            <p>Minutes</p>
          </div>
          <div className={styles.infoitem}>
            <h2>250</h2>
            <p>Calories</p>
          </div>
        </div>

        <div className={styles.maincontainer}>
          <h2 className={styles.ingre}>Ingredients:</h2>
          <div className={styles.ing}>
            <ul className={styles.list}>
              <li>1 cup boiled chickpeas</li>
              <li>1 cup diced boiled potatoes</li>
              <li>1/4 cup finely chopped onions</li>
              <li>1/4 cup finely chopped tomatoes</li>
              <li>1/2 cup sev (crispy gram flour noodles)</li>
              <li>2 tbsp tamarind chutney</li>
              <li>2 tbsp green chutney</li>
              <li>1 tsp chaat masala</li>
              <li>1/2 tsp roasted cumin powder</li>
              <li>Salt to taste</li>
              <li>Fresh coriander leaves for garnish</li>
            </ul>
          </div>

          <div className={styles.stepscontainer}>
            <h2 className={styles.steps}>Steps:</h2>
            <ul className={styles.idlysteps}>
              <li>Preparation:
                <br/>Boil the chickpeas and potatoes until soft and tender. Drain and set aside.
              </li>
              <li>Mixing the Base:
                <br/>In a large bowl, combine the boiled chickpeas, diced potatoes, chopped onions, and tomatoes.
              </li>
              <li>Adding the Spices:
                <br/>Sprinkle chaat masala, roasted cumin powder, and salt over the mixture. Toss gently to mix well.
              </li>
              <li>Adding Chutneys:
                <br/>Drizzle the tamarind chutney and green chutney over the mixture. Adjust the quantity of chutneys based on your taste preference.
              </li>
              <li>Final Touch:
                <br/>Add a generous amount of sev on top and garnish with fresh coriander leaves.
              </li>
              <li>Serving:
                <br/>Serve immediately to enjoy the fresh crunch of sev and the tangy flavors of the chutneys.
              </li>
            </ul>
          </div>
        </div>
        <div className="accompaniments">
        <h1 className={styles.accom}>Accompaniments</h1>
        <ul className={styles.sam}>
          <li> Sweet Yogurt</li>
          <li> Papdi (crispy dough wafers)</li>
          <li> Mint Chutney</li>
          <li> Pomegranate Seeds (optional)</li>
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

export default Chat
