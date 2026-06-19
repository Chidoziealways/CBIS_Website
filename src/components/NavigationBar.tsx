import React from "react";
import {Link} from "react-router-dom";
import "./NavigationBar.css"

const NavigationBar: React.FC = () => {
    return (
        <nav className="navBar">
            <div className="navbar-logo">CBIS Magodo</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;