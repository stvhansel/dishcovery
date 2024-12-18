import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="container pb-3 mt-3 slide-in-down">
            <nav className="navbar bg-body-light">
                <a className="navbar-brand img-fluid fw-bold logo fs-3">Dishcovery</a>
                <Link to="/" className="btn"><FontAwesomeIcon icon={faHome} /></Link>
            </nav>
        </div>
    );
};

export default NavigationBar;
