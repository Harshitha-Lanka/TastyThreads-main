


import react from 'react';
import component1 from '../Components/Component1'
import component2 from '../Components/Component2'
import component3 from '../Components/Component3'
import component4 from '../Components/Component4'
import component5 from '../Components/Component5'
import component6 from '../Components/Component6'
import component7 from '../Components/Component7'
import component8 from '../Components/Component8'
import component9 from '../Components/Component9'


import styles from '../Components/Component1.module.css';

import Footer from './Footer'
import Header from './Header'
import Statistics from './Statistics'




import React from "react";

import Component1 from "../Components/Component1";
import Component2 from "../Components/Component2";
import Component3 from "../Components/Component3";
import Component4 from "../Components/Component4";
import Component5 from "../Components/Component5";
import Component6 from "../Components/Component6";
import Component7 from "../Components/Component7";
import Component8 from "../Components/Component8";
import Component9 from "../Components/Component9";


import { useNavigate } from "react-router-dom";
import Idly from "./Idly";



import Styles from "../Components/Component1.module.css";
import { UseNavigate } from "react-router-dom";
import idly from "./Idly";

import footer from "./Footer";
import header from "./Header";
import statistics from "./Statistics";


const RecipeListPage = () => {
  const navigate = useNavigate();

  const buttonClicking = () => {
    navigate("/Recipeform");
  };
  return (
    <>
      <Header />
      <Header />
      <div className={styles.pagecontainer}>
        {/* Recipe Card Container */}
        <div className={styles.recipeCardContainer}>
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
          <Component5 />
          <Component6 />
          <Component7 />
          <Component8 />
          <Component9 />
        </div>

        <h2 className={styles.heading2}>
          Have a delicious recipe to add?? Submit It Now!
        </h2>
        <button className={styles.button2} onClick={buttonClicking}>
          Add your Recipe
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.formContainer}>
        <h1 className={styles.contact}>
          Questions or feedback? Let's Connect!
        </h1>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="texts"
            className={styles.text}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            className={styles.emails}
            placeholder="Email"
          />
          <textarea
            rows={10}
            columns={50}
            className={styles.message}
            placeholder="Message"
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.submits}>Submit</button>
        </div>
      </div>
      <Statistics />
      <Footer />
    </>
  );
};

export default RecipeListPage;
