import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RecipeListPage from './Components/RecipeListPage';
import RecipeForm from './Components/Recipeform'
import Login from './Components/Login';
import './App.css';
import RecipeDetailsPage from './Components/RecipeDetailsPage';
import './index.css'
import Signup from './Components/Signup';
import Recipedetailing from './Components/Recipedetailing'
import Listingofrecipe from './Components/Listingofrecipe'

function App() {
  return (
    <Router>
      <div className="App">
  
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home route */}
         
          <Route path="/RecipeListPage" element={<RecipeListPage/>} /> {/* Recipe Details route with dynamic ID */}
          <Route path="/RecipeForm" element={<RecipeForm />} /> {/* Recipe Details route with dynamic ID */}
          <Route path="/Login" element={<Login />} /> {/* Recipe Details route with dynamic ID */}
          {/* <Route path="/Contactus" element={<Contactus/>}/> */}
         <Route path="/RecipeDetails/:name"></Route>
         <Route path="/RecipeDetailsPage/:name" element={<RecipeDetailsPage />} />
         <Route path="/recipe/:name" element={<RecipeDetailsPage />} />
         <Route path="/Signup" element={<Signup/>}/>
         <Route path="/recipe/:id" element={<Recipedetailing />} />
         <Route path="/RecipeList" element={<Listingofrecipe />}/>

        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
