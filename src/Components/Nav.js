import style from  "./Nav.css";

function Nav () {

return (
    <div>
        <nav className="nav-menu">
            <img src="/Images/Asset 9@4x.png" alt="Logo"/>
                <div className="nav-list">
                    <ul>
                        <li><a href="" id="home" ></a>Home</li>
                        <li><a href="" id="about" ></a>About</li>
                        <li><a href="" id="menu" ></a>Menu</li>
                        <li><a href="" id="reservations" ></a>Reservations</li>
                        <li><a href="" id="orderonline" ></a>Order Online</li>
                        <li><a href="" id="login" ></a>Login</li>
                    </ul>
                </div>
        </nav>
    </div>
)

}

export default Nav;