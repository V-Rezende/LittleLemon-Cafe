

function Menu () {
    return (
        <div>
            <div className="menu">
                <h1>South American Café Menu</h1>
                    <ul>
                        <li class="category">Beverages</li>
                            <ul>
                                <li>Coffee<span class="price">$2.50</span></li>
                                <li>Tea<span class="price">$2.00</span></li>
                                <li>Mate<span class="price">$3.00</span></li>
                                <li>Fresh Fruit Juices<span class="price">$4.00</span></li>
                            </ul>

                        <li class="category">Appetizers</li>
                            <ul>
                                <li>Empanadas<span class="price">$3.50</span></li>
                                <li>Arepas<span class="price">$4.00</span></li>
                                <li>Yucca Fries<span class="price">$3.00</span></li>
                                <li>Plantain Chips<span class="price">$2.50</span></li>
                            </ul>

                        <li class="category">Main Courses</li>
                            <ul>
                                <li>Asado (Grilled Meat)<span class="price">$10.00</span></li>
                                <li>Ceviche<span class="price">$8.50</span></li>
                                <li>Feijoada (Brazilian Stew)<span class="price">$9.00</span></li>
                                <li>Lomo Saltado (Peruvian Stir-Fry)<span class="price">$11.50</span></li>
                            </ul>

                        <li class="category">Desserts</li>
                            <ul>
                                <li>Tres Leches Cake<span class="price">$5.00</span></li>
                                <li>Alfajores<span class="price">$2.50</span></li>
                                <li>Churros<span class="price">$3.00</span></li>
                                <li>Flan<span class="price">$4.50</span></li>
                            </ul>
                    </ul>
            </div>
        </div>
    )
}

export default Menu;