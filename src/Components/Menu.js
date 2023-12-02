import style from "./Menu.css";

function Menu () {
    return (
        <div className="menu">
            <div className="menu-content">
                <h1>Little Lemon Menu <span><img src="/Images/Asset 7@4x.png"/></span></h1>
                    <ul className="menu-list">
                        <li class="category-bev">Beverages</li>
                            <ul className="menu-itens">
                                <li className="item">Coffee: <span class="price">$2.50</span></li>
                                <li className="item">Tea: <span class="price">$2.00</span></li>
                                <li className="item">Mate: <span class="price">$3.00</span></li>
                                <li className="item">Fresh Fruit Juices: <span class="price">$4.00</span></li>
                            </ul>

                        <li class="category-app">Appetizers</li>
                            <ul className="menu-itens">
                                <li className="item">Empanadas: <span class="price">$3.50</span></li>
                                <li className="item">Arepas: <span class="price">$4.00</span></li>
                                <li className="item">Yucca Fries: <span class="price">$3.00</span></li>
                                <li className="item">Plantain Chips: <span class="price">$2.50</span></li>
                            </ul>

                        <li class="category-lun">For Lunch</li>
                            <ul className="menu-itens">
                                <li className="item">Asado (Grilled Meat): <span class="price">$10.00</span></li>
                                <li className="item">Ceviche: <span class="price">$8.50</span></li>
                                <li className="item">Feijoada (Brazilian Stew): <span class="price">$9.00</span></li>
                                <li className="item">Lomo Saltado (Peruvian Stir-Fry): <span class="price">$11.50</span></li>
                            </ul>

                        <li class="category-des">Desserts</li>
                            <ul className="menu-itens">
                                <li className="item">Tres Leches Cake: <span class="price">$5.00</span></li>
                                <li className="item">Alfajores: <span class="price">$2.50</span></li>
                                <li className="item">Churros: <span class="price">$3.00</span></li>
                                <li className="item">Flan: <span class="price">$4.50</span></li>
                            </ul>
                    </ul>
            </div>
        </div>
    )
}

export default Menu;