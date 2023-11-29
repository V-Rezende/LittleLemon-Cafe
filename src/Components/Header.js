import style from "./Header.css";


function Header () {

    return (
        <div>
            <header>
                <div></div>
                        <div className="header-left">
                            <h1>Little Lemon Café</h1>
                            <h3>Gold Coast</h3>
                            <p>Nestled in Gold Coast, Little Lemon Café exudes warmth with its South American charm. The cozy ambiance, vibrant decor, and aromatic coffee create a welcoming haven for locals and visitors alike.</p>
                            <button className="header-button" type="">Reserve a Table</button>
                        </div>
                        <div className="header-right">
                            <img src="/Images/restaurant chef B.jpg" alt="Image Header"/>
                        </div>
                <div></div>
            </header>
        </div>
    )

}

export default Header;