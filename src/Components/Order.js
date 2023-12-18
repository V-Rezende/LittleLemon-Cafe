import React, { useState } from "react";
// eslint-disable-next-line
import style from "./Order.css";
import Modal from "./Modal";

function Order () {

    const [openModal, setOpenModal] = useState(false);

    const [modalContent, setModalContent] = useState({
        image:'',
        item:'',
        price:'',
        description:''
    })

    const handleClick = (image, item, price, description) => {
        setModalContent({
            image,
            item,
            price,
            description
        });
        setOpenModal(true);
    }

    return (
        <div>
            <div className="order-online">
                <h1>Bebidas</h1>
                    <div className="card-group-bebidas">
                        <div className="card-order">
                            <img
                                className='photo'
                                src="./images/espresso.jpg"
                                alt="Espresso" />
                            <div className="card-content">
                                <div className="card-title">
                                    <h3 className="item">Expresso</h3>
                                    <h3 className="price">$4,00</h3>
                                </div>
                                <div className="card-main" id='card-main'>
                                    <p>
                                    Rich and robust, Brazilian espresso captivates with its intense flavor and velvety crema. Grown in the sun-kissed landscapes, it offers a bold and delightful caffeine experience, embodying Brazil's coffee legacy.
                                    </p>
                                </div>
                                <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/espresso.jpg",
                                        "Espresso",
                                        "$4,00",
                                        "Rich and robust, Brazilian espresso captivates with its intense flavor and velvety crema. Grown in the sun-kissed landscapes, it offers a bold and delightful caffeine experience, embodying Brazil's coffee legacy."
                                    )}>
                                    Add Order
                                </button>
                            </div>
                        </div>

                        <Modal
                            isOpen={openModal}
                            setOpenModal={setOpenModal}
                            modalContent={modalContent}
                        >
                        </Modal>

                        <div className="card-order">
                            <img src="./images/mate.jpg"alt="Mate Limão" />
                            <div className="card-content">
                                <div className="card-title">
                                    <h3 className="item">Mate Limão</h3>
                                    <h3 className="price">$6,00</h3>
                                </div>
                                <div className="card-main" id='card-main'>
                                    <p>Brazilian mate limão, a refreshing blend of yerba mate and zesty lime, captivates with its vibrant flavor, offering a delightful and energizing beverage enjoyed across diverse landscapes in Brazil.</p>
                                </div>
                                <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/mate.jpg",
                                        "Mate Limão",
                                        "$6,00",
                                        "Brazilian mate limão, a refreshing blend of yerba mate and zesty lime, captivates with its vibrant flavor, offering a delightful and energizing beverage enjoyed across diverse landscapes in Brazil."
                                    )}>
                                    Add Order
                                </button>
                            </div>
                        </div>
                        <div className="card-order">
                            <img src="./images/Suco.jpeg"alt="Fresh Juice" />
                            <div className="card-content">
                                <div className="card-title">
                                    <h3 className="item">Fresh Juice</h3>
                                    <h3 className="price">$8,00</h3>
                                </div>
                                <div className="card-main" id='card-main'>
                                    <p>Savor the vibrant allure of a Brazilian elixir, a luscious concoction of succulent passion fruit, zesty acerola, and refreshing guava, delivering a tropical symphony in every invigorating sip. Try our freshest pinnaple with mint!</p>
                                </div>
                                <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/Suco.jpeg",
                                        "Fresh Juice",
                                        "$8,00",
                                        "Savor the vibrant allure of a Brazilian elixir, a luscious concoction of succulent passion fruit, zesty acerola, and refreshing guava, delivering a tropical symphony in every invigorating sip. Try our freshest pinnaple with mint!"
                                    )}>
                                    Add Order
                                </button>
                            </div>
                        </div>
                    </div>
                <h1>Entradas</h1>
                    <div className="card-group-entradas">
                            <div className="card-order">
                                <img src="./images/paodequeijo.jpg"alt="Pão de Queijo" />
                                <div className="card-content">
                                    <div className="card-title">
                                        <h3 className="item">Pão de Queijo</h3>
                                        <h3 className="price">$8,00</h3>
                                    </div>
                                    <div className="card-main" id='card-main'>
                                        <p>Pão de queijo, a beloved Brazilian delight from Minas Gerais, is a cheesy, gluten-free bite-sized treat. Its irresistibly chewy texture and rich cheese flavor embody culinary perfection from the region.</p>
                                    </div>
                                    <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/paodequeijo.jpg",
                                        "Pão de Queijo",
                                        "$8,00",
                                        "Pão de queijo, a beloved Brazilian delight from Minas Gerais, is a cheesy, gluten-free bite-sized treat. Its irresistibly chewy texture and rich cheese flavor embody culinary perfection from the region."
                                    )}>
                                    Add Order
                                    </button>
                                </div>
                            </div>
                            <div className="card-order">
                                <img src="./images/pao.jpg"alt="Pão com Mortadela" />
                                <div className="card-content">
                                    <div className="card-title">
                                        <h3 className="item">Pão com Mortadela</h3>
                                        <h3 className="price">$8,00</h3>
                                    </div>
                                    <div className="card-main" id='card-main'>
                                        <p>Indulge in a gourmet delight with a lavish 'Pão com Mortadela', featuring a premium mortadela, paired with fresh, fragrant pão francês and luscious organic butter. Unparalleled, exquisite flavors await.</p>
                                    </div>
                                    <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/pao.jpg",
                                        "Pão com Mortadela",
                                        "$8,00",
                                        "Indulge in a gourmet delight with a lavish 'Pão com Mortadela', featuring a premium mortadela, paired with fresh, fragrant pão francês and luscious organic butter. Unparalleled, exquisite flavors await."
                                    )}>
                                    Add Order
                                    </button>
                                </div>
                            </div>
                            <div className="card-order">
                                <img src="./images/bolo.jpg" alt="Bolo de Milho" />
                                <div className="card-content">
                                    <div className="card-title">
                                        <h3 className="item">Bolo de Milho</h3>
                                        <h3 className="price">$10,00</h3>
                                    </div>
                                    <div className="card-main" id='card-main'>
                                        <p>Bolo de milho, a Brazilian corn cake, captures the essence of homemade warmth. Golden and moist, it blends cornmeal and coconut, creating a delightful, comforting treat that echoes traditional flavors.</p>
                                    </div>
                                    <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/bolo.jpg",
                                        "Bolo de Milho",
                                        "$10,00",
                                        "Bolo de milho, a Brazilian corn cake, captures the essence of homemade warmth. Golden and moist, it blends cornmeal and coconut, creating a delightful, comforting treat that echoes traditional flavors."
                                    )}>
                                    Add Order
                                    </button>
                                </div>
                            </div>
                        </div>
                <h1>Doces</h1>
                    <div className="card-group-doces">
                            <div className="card-order">
                                <img src="./images/pudim.jpg"alt="Pudim" />
                                <div className="card-content">
                                    <div className="card-title">
                                        <h3 className="item">Pudim</h3>
                                        <h3 className="price">$5,00</h3>
                                    </div>
                                    <div className="card-main" id='card-main'>
                                        <p>Brazilian pudim is a luscious caramel custard dessert, beloved for its silky texture and sweet flavor. Made with condensed milk, eggs, and sugar, it's a classic Brazilian indulgence.</p>
                                    </div>
                                    <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/pudim.jpg",
                                        "Pudim",
                                        "$5,00",
                                        "Brazilian pudim is a luscious caramel custard dessert, beloved for its silky texture and sweet flavor. Made with condensed milk, eggs, and sugar, it's a classic Brazilian indulgence."
                                    )}>
                                    Add Order
                                    </button>
                                </div>
                            </div>
                            <div className="card-order">
                                <img src="./images/churros.jpg"alt="Churros" />
                                <div className="card-content">
                                    <div className="card-title">
                                        <h3 className="item">Churros</h3>
                                        <h3 className="price">$6,00</h3>
                                    </div>
                                    <div className="card-main" id='card-main'>
                                        <p>Churros relleno with dulce de leche is a delectable treat, featuring golden-fried dough filled with luscious caramel. The crispy exterior complements the sweet, gooey center, creating a heavenly indulgence.</p>
                                    </div>
                                    <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/churros.jpg",
                                        "Churros",
                                        "$6,00",
                                        "Churros relleno with dulce de leche is a delectable treat, featuring golden-fried dough filled with luscious caramel. The crispy exterior complements the sweet, gooey center, creating a heavenly indulgence."
                                    )}>
                                    Add Order
                                    </button>
                                </div>
                            </div>
                            <div className="card-order">
                                <img src="./images/briga.jpg"alt="Brigadeiro" />
                                <div className="card-content">
                                    <div className="card-title">
                                        <h3 className="item">Brigadeiro</h3>
                                        <h3 className="price">$3,50</h3>
                                    </div>
                                    <div className="card-main" id='card-main'>
                                        <p>Brigadeiro is a Brazilian chocolate delicacy, crafted from condensed milk, cocoa, butter, and chocolate sprinkles. These fudgy delights offer a sweet and irresistible taste, symbolizing Brazilian culinary joy.</p>
                                    </div>
                                    <button
                                    className="order-button"
                                    type="button"
                                    onClick={() => handleClick(
                                        "./images/briga.jpg",
                                        "Brigadeiro",
                                        "$3,50",
                                        "Brigadeiro is a Brazilian chocolate delicacy, crafted from condensed milk, cocoa, butter, and chocolate sprinkles. These fudgy delights offer a sweet and irresistible taste, symbolizing Brazilian culinary joy."
                                    )}>
                                    Add Order
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Order;