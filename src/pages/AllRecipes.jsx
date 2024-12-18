import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

const AllRecipes = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [showPopup, setShowPopup] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null); 

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const requests = [];
                const totalRequests = 26;
                let completedRequests = 0;

                for (let i = 97; i <= 122; i++) {
                    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${String.fromCharCode(i)}`);
                    const data = await response.json();
                    if (data.meals) {
                        requests.push(...data.meals);
                    }
                    completedRequests++;
                    const currentProgress = Math.round((completedRequests / totalRequests) * 100);
                    setProgress(currentProgress);
                }

                setItems(requests);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    const handleLookMoreClick = (item) => {
        setSelectedItem(item); 
        setShowPopup(true); 
    };

    return (
        <>
            {loading ? null : <NavigationBar className="fade-in" />}
            <div className={`container ${!loading ? "fade-in" : ""}`}>
                {!loading && (
                    <>
                        <div className="mt-5">
                            <h5 className="smHeadRecipe">Unleash Your Culinary Creativity!</h5>
                        </div>
                        <div className="header">
                            <h1>All Recipes</h1>
                        </div>
                    </>
                )}
                <div className="allRecipes mt-5">
                    {loading ? (
                        <div className="text-center mt-5">
                            <div className="progress" style={{ height: "30px", width: "50%", margin: "300px auto auto auto" }}>
                                <div className="progress-bar bg-dark" role="progressbar" style={{ width: `${progress}%`, color: "white" }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                                    {progress}%
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            {items.map(item => (
                                <div key={item.idMeal} className="col-lg-3 col-md-3 col-sm-12 pb-5 d-flex justify-content-center">
                                    <div className="card ho">
                                        <div className="view overlay">
                                            <img className="card-img-top" src={item.strMealThumb} alt={item.strMeal} />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{item.strMeal}</h4>
                                            <a className="btn btn-outline-dark" onClick={() => handleLookMoreClick(item)}>Look Recipe</a> 
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {showPopup && (
                <div className="popup-background" onClick={() => setShowPopup(false)}>
                    <div className="popup-content pop-in">
                        <h2>{selectedItem.strMeal}</h2>
                        <h4>Ingredients:</h4>
                        <ul>
                            {Array.from({ length: 20 }, (_, index) => index + 1).map(index => {
                                const ingredient = selectedItem[`strIngredient${index}`];
                                if (ingredient) {
                                    return <li key={index}>{ingredient}</li>;
                                }
                                return null;
                            })}
                        </ul>
                        <h4>Instructions:</h4>
                        <ul>
                            {selectedItem.strInstructions.split('.').map((sentence, index) => (
                                sentence.trim() && <li key={index}> {sentence.trim()}</li> 
                            ))}
                        </ul>
                        <button className="btn btn-outline-dark" onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AllRecipes;
