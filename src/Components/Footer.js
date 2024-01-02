// eslint-disable-next-line
import style from "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer () {

    return (

        <footer>
            <div></div>
                <img src="./images/restaurant.JPG" alt="Little Lemon"/>
                    <ul className="navigation">
                        <li><Link to="/" className="footer-item">Home</Link></li>
                        <li><Link to="/about" className="footer-item">About</Link></li>
                        <li><Link to="/menu" className="footer-item">Menu</Link></li>
                        <li><Link to="/reservation" className="footer-item">Reservations</Link></li>
                        <li><Link to="/order-online" className="footer-item">Order Online</Link></li>
                        <li><Link to="/login" className="footer-item">Login</Link></li>
                    </ul>
                    <ul className="contact">
                        <li><h4>Contact</h4></li>
                        <li>Address: 42 The Esplanade, Paradise Point QLD 4216</li>
                        <br></br>
                        <li>Phone: +61 0417 525 259</li>
                        <br></br>
                        <li>Email: contact.lillemmon@gmail.com</li>
                    </ul>
                    <ul className="social-media">
                        <li><h4>Social Media</h4></li>
                        <li><a href="https://www.instagram.com"></a>Instagram</li>
                        <li><a href="https://www.facebook.com"></a>Facebook</li>
                    </ul>
            <div></div>
        </footer>

    )

}

export default Footer;