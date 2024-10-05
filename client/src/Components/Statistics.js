import React from 'react'
import "./Statistics.css";


function Statistics() {
  return (
    <div>
       {/* <!-- no. of recipes etc --> */}
       <section className="stat">
        <div className="container stat-container">
          <div className="box flex">
            <h1 id="technicians">30+</h1>
            <p className="justify">Exquisite Recipes</p>
          </div>

          <div class="box flex box2">
            <h1 id="technicians">10+</h1>
            <p className="justify">Global Flavors</p>
          </div>

          <div className="box flex box3">
            <h1 id="technicians">150+</h1>
            <p className="justify">Culinary Enthusiasts</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Statistics
