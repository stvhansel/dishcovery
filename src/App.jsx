import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImages from './components/HeroImages';

const App = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const resultRef = useRef(null);
  const resultNoneRef = useRef(null);

  useEffect(() => {
    if (show && resultRef.current && searchResults.length === 0) {
      resultNoneRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (show && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [show, searchResults]);

  const searchRecipe = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await response.json();
      if (data.meals) {
        setSearchResults(data.meals);
        setShow(true);
      } else {
        setSearchResults([]);
        setShow(true);
      }
    } catch (error) {
      console.error("Error searching recipe:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchRecipe();
    }
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
  };

  const formatInstructions = (instructions) => {
    const splittedInstructions = instructions.split('. ');
    return (
      <ul>
        {splittedInstructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="container pb-3 mt-3 slide-in-down">
        <nav className="navbar bg-body-light">
          <a className="navbar-brand img-fluid fw-bold logo fs-3">Dishcovery</a>
          <div className="d-flex">
            <input
              className="form-control me-2 searchField"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              type="search"
              placeholder="Insert your dish"
              aria-label="Search"
            />
          </div>
        </nav>
      </div>

      <HeroImages />

      <div className="search-result container" ref={resultRef}>
        {show && searchResults.length > 0 && (
          <div>
            <div className="slide-in-down mb-5">
              <h1 className="text-center mt-5 header-resp">What to Cook?</h1>
              <h5 className="text-center">We Provide Our Best Recipes</h5>
            </div>
            <div className="row fade-in">
              {searchResults.map(item => (
                <div key={item.idMeal} className="col-lg-4 col-md-4 col-sm-12 mb-5 d-flex justify-content-center">
                  <div className="card ho">
                    <img src={item.strMealThumb} className="card-img-top" alt={item.strMeal} />
                    <div className="card-body">
                      <h5 className="card-title">{item.strMeal}</h5>
                      <button className="btn btn-outline-dark" onClick={() => handleRecipeClick(item)}>Look Recipe</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="search-result container" ref={resultNoneRef}>
        {show && searchResults.length === 0 && (
          <div className="slide-in-down mb-5 mt-5" id="resultNone">
            <h1 className="mt-5 text-center header-resp">Sorry We Don't Have That Recipe</h1>
            <h5 className="text-center desc-resp">We Will Keep Improving Our Recipes</h5>
          </div>
        )}
      </div>

      {selectedRecipe && (
        <div className="popup-background">
          <div className="popup-content pop-in">
            <h2>{selectedRecipe.strMeal}</h2>
            <h4>Ingredients:</h4>
            <ul>
              {Object.keys(selectedRecipe).map(key => {
                if (key.includes("strIngredient") && selectedRecipe[key]) {
                  return <li key={key}>{selectedRecipe[key]}</li>;
                }
                return null;
              })}
            </ul>
            <h4>Instructions:</h4>
            {formatInstructions(selectedRecipe.strInstructions)}
            <button className="btn btn-outline-dark" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
