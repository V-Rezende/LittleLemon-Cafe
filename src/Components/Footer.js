import style from "./Footer.css";

function Footer () {

    return (

        <footer>
            <div></div>
                <img src="/Images/restaurant.jpg" alt="Footer Image"/>
                    <ul className="navigation">
                        <li><h4>Doormat Navigation</h4></li>
                        <li><a href="#home" id="home" ></a>Home</li>
                        <li><a href="#about" id="about" ></a>About</li>
                        <li><a href="#menu" id="menu" ></a>Menu</li>
                        <li><a href="#reservtions" id="rezervations" ></a>Reservations</li>
                        <li><a href="#orderonline" id="orderonline" ></a>Order Online</li>
                        <li><a href="#login" id="login" ></a>Login</li>
                    </ul>
                    <ul className="contact">
                        <li><h4>Contact</h4></li>
                        <li><a href=""></a>Adress</li>
                        <li><a href=""></a>Phone Number</li>
                        <li><a href=""></a>Email</li>
                    </ul>
                    <ul className="social-media">
                        <li><h4>Social Media</h4></li>
                        <li><a href="instagram.com"></a>Instagram</li>
                        <li><a href="facebook.com"></a>Facebook</li>
                    </ul>
            <div></div>
        </footer>

    )

}

export default Footer;