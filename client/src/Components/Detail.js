import React, { useState } from "react";
import "./Detail.css"; // Ensure you create this CSS file
import Image4 from "../Assets/panipuri2.jpeg";

function RecipeDetails() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <>
      <h1 className="heading-master">"Master Your Kitchen: Genius Tips & Tricks"</h1>
      <div className="recipe-details-container">
        <div className="left-section img-sec">
          <img src={Image4} alt="Pani Puri" className="recipe-image" />
        </div>
        <div className="right-section">
          <div className="recipe-info">
            <h2>Reuse Leftover Oil Smartly</h2>
            <p>
              After deep frying, store leftover oil in a clean container and reuse it for
              sautéing vegetables or making curries to minimize waste.
            </p>

            <h2>Healthier Sweetness Alternatives</h2>
            <p>
              Replace refined sugar with honey, jaggery, or dates in desserts to make them
              healthier without compromising taste.
            </p>

            <h2>Fresh Herbs Anytime</h2>
            <p>
              Freeze chopped herbs like coriander or mint in ice cube trays with a little
              water or oil to have fresh herbs on hand for months.
            </p>


            <h2>Leftover Rice Magic</h2>
            <p>
              Use leftover rice to make crispy rice fritters by adding veggies, spices,
              and shallow frying them to avoid wastage.
            </p>

            <h2>Healthier Frying with Ghee</h2>
            <p>
              Swap regular oil with ghee for frying to improve the nutritional profile
              of your dishes while adding a rich, buttery flavor.
            </p>
          </div>
        </div>
      </div>

      <div className="like-section">
        <button className="like-button" onClick={handleLike}>
          Love it!
        </button>
        <button className="dislike-button" onClick={handleDislike}>
          Satisfactory
        </button>
        <p>
          {likes} {likes === 1 ? "Like" : "Likes"} | {dislikes}{" "}
          {dislikes === 1 ? "Dislike" : "Dislikes"}
        </p>
      </div>
    </>
  );
}

export default RecipeDetails;
