// eslint-disable-next-line
import style from "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header () {

    return (
        <div>
            <header>
                <div></div>
                        <div className="header-left">
                            <h1>Little Lemon Café</h1>
                            <h3>Gold Coast</h3>
                            <p>Nestled in Gold Coast, Little Lemon Café exudes warmth with its South American charm. The cozy ambiance, vibrant decor, and aromatic coffee create a welcoming haven for locals and visitors alike.</p>
                            <Link className="header-button" type="button" to="/reservation">
                                Reserve a Table
                            </Link>
                        </div>
                        <div className="header-right">
                            <img src="./images/restaurantchefb.JPG" alt="Café Chef"/>
                        </div>
                <div></div>
            </header>
        </div>
    )

}

export default Header;