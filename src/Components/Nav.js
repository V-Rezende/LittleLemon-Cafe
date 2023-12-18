import style from  "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav () {

    function menuShow() {
        const menuMobile = document.querySelector('.mobile-menu');
            if(menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');
            }
            else {
                menuMobile.classList.add('open')
            }
    }

return (
    <div>
        <nav className="nav-menu">
            <img src="./Images/Asset 9@4x.png" alt="Logo"/>
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
                <div className="mobile-menu-icon">
                    <button onClick={() => menuShow()} className="menu-icon"><img src="./Images/hamburger-menu-50.png" alt="icone"/></button>
                </div>
        </nav>
        <div className="mobile-menu">
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
                <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
                <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </div>
    </div>
)

}

export default Nav;