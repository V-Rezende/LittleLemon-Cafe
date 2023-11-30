import style from "./Main.css";

function Main () {

return (
    <div className="main">
        <div className="specials">
            <div></div>
            <div className="container-2">
                <h1>Specials</h1>
                <div className="card">
                    <img src="/Images/smashed avo.jpg"alt="Smashed Avo" />
                    <div className="card-content">
                        <div className="card-title">
                            <h3 className="item">Rio Bennie</h3>
                            <h3 className="price">$16,00</h3>
                        </div>
                        <div className="card-main">
                            <p>Indulge in a tantalizing twist on the classic Eggs Benedict, as delicate poached eggs meet zesty hollandaise with a touch of South American flair, awakening your taste buds.</p>
                        </div>
                        <div className="card-footer">
                            <p><strong>Order a Delivery</strong></p>
                            <img src="/Images/food.delivery.png" alt="Delivery Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-3">
            <div className="card">
                    <img src="/Images/acai.jpg" alt="Açaí" />
                    <div className="card-content">
                        <div className="card-title">
                            <h3 className="item">Açaí do Rico</h3>
                            <h3 className="price">$14,00</h3>
                        </div>
                        <div className="card-main">
                            <p>Savor the essence of Brazil with a delectable açaí bowl, blending the rich flavors of Brazilian berries, organic granola into a vibrant and wholesome culinary delight.</p>
                        </div>
                        <div className="card-footer">
                            <p><strong>Order a Delivery</strong></p>
                            <img src="/Images/food.delivery.png" alt="Delivery Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-4">
                <button class="button">OnLine Menu</button>
            <div className="card">
                    <img src="/Images/pingado.jpg" alt="Pingado" />
                    <div className="card-content">
                        <div className="card-title">
                            <h3 className="item">Pingado</h3>
                            <h3 className="price">$8,00</h3>
                        </div>
                        <div className="card-main">
                            <p>The classic "pingado" is a unic Brazilian delight, featuring a strong latte paired with two slices of buttered French bread, creating a comforting and flavorful "boteco" feelings. </p>
                        </div>
                        <div className="card-footer">
                            <p><strong>Order a Delivery</strong></p>
                            <img src="/Images/food.delivery.png" alt="Delivery Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <div className="testimonials">
            <h1>Testimonials</h1>
        </div>
    </div>
)

}

export default Main;