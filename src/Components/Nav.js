import style from  "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav () {

return (
    <div>
        <nav className="nav-menu">
            <img src="/Images/Asset 9@4x.png" alt="Logo"/>
                <div className="nav-list">
                    <ul>
                        <li><Link to="/" className="nav-item">Home</Link></li>
                        <li><Link to="/about" className="nav-item">About</Link></li>
                        <li><Link to="/menu" className="nav-item">Menu</Link></li>
                        <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
                        <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                        <li><Link to="/login" className="nav-item">Login</Link></li>
                    </ul>
                </div>
        </nav>
    </div>
)

}

export default Nav;