import heroimg from "./Images/recipe02.png";
import { Link } from "react-router-dom";

const HeroImages = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 mt-sm-3 mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-5 slide-in-left">
                        <h1 className="header">Unlock Culinary Creativity with Endless Recipes!</h1>
                        <p className="desc mt-3">Welcome to our culinary corner! At Dishcovery, we're passionate about bringing the world's
                            flavors to your kitchen. With a diverse collection of recipes sourced from every corner of the globe,
                            we aim to inspire your inner chef and broaden your culinary horizons. </p>
                        <Link to="/AllRecipes" className="btn btn-outline-dark btn-hero py-2 fw-bold mt-2 mt-md-0">
                            See Our Recipes ➜
                        </Link>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 slide-in-right">
                        <img src={heroimg} alt="recipe book" className="hero-img img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeroImages;