import style from "./Main.css";
import { Link } from 'react-router-dom';
import Modal from "./Modal.js";
import { useState } from "react";

function Main () {

    const [openModal, setOpenModal] = useState(false);

    const [modalContent, setModalContent] = useState({
        image:'',
        item: '',
        price: '',
        description: ''
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

    <div className="main">
        <div className="specials">
            <div className="specials-head">
                <h1>Specials</h1>
                <Link className="online-menu" type="button" to="/order-online">
                    OnLine Menu
                </Link>
            </div>
                <div className="container">
                    <div className="card">
                        <img className="image-1" src="./Images/smashed avo.jpg" alt="Smashed Avo" />
                        <div className="card-content">
                            <div className="card-title">
                                <h3 className="item-1">Rio Bennie</h3>
                                <h3 className="price-1">$16,00</h3>
                            </div>
                            <div className="card-main">
                                <p className="description-1">Indulge in a tantalizing twist on the classic Eggs Benedict, as delicate poached eggs meet zesty hollandaise with a touch of South American flair, awakening your taste buds.</p>
                            </div>
                            <button
                                type="button"
                                className="special-1"
                                onClick={() => handleClick(
                                    "./Images/smashed avo.jpg",
                                    "Rio Bennie",
                                    "$16,00",
                                    "Indulge in a tantalizing twist on the classic Eggs Benedict, as delicate poached eggs meet zesty hollandaise with a touch of South American flair, awakening your taste buds."
                                )}>
                                Order Now
                            </button>
                        </div>
                    </div>

                    <Modal
                        isOpen={openModal}
                        setOpenModal={setOpenModal}
                        modalContent={modalContent}
                    >
                    </Modal>

                    <div className="card">
                        <img className="image-2" src="./Images/acai.jpg" alt="Açaí" />
                        <div className="card-content">
                            <div className="card-title">
                                <h3 className="item-2">Açaí do Rico</h3>
                                <h3 className="price-2">$14,00</h3>
                            </div>
                            <div className="card-main">
                                <p className="description-2">Savor the essence of Brazil with a delectable açaí bowl, blending the rich flavors of Brazilian berries, organic almond granola into a vibrant and wholesome culinary delight.</p>
                            </div>
                            <button
                                type='button'
                                className="special-2"
                                onClick={() => handleClick(
                                    "./Images/acai.jpg",
                                    "Açaí do Rico",
                                    "$14,00",
                                    "Savor the essence of Brazil with a delectable açaí bowl, blending the rich flavors of Brazilian berries, organic almond granola into a vibrant and wholesome culinary delight."
                                )}>
                                Order Now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img className="image-3" src="./Images/pingado.jpg" alt="Pingado" />
                        <div className="card-content">
                            <div className="card-title">
                                <h3 className="item-3">Pingado</h3>
                                <h3 className="price-3">$8,00</h3>
                            </div>
                            <div className="card-main">
                                <p className="description">The classic "pingado" is a unic Brazilian delight, featuring a strong latte paired with two slices of buttered French bread, creating a comforting and flavorful "boteco" feelings. </p>
                            </div>
                            <button
                                type='button'
                                className="special-3"
                                onClick={() => handleClick(
                                    "./Images/pingado.jpg",
                                    "Pingado",
                                    "$8,00",
                                    "The classic 'pingado' is a unic Brazilian delight, featuring a strong latte paired with two slices of buttered French bread, creating a comforting and flavorful 'boteco' feelings."
                                )}>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        <div className="testimonials-title">
            <h1>What Clients Say About Us</h1>
        </div>
        <div className="testimonials">
            <div></div>
                <div className="all-boxes">
                    <div className="box">
                        <div className="top-box">
                            <img src="./Images/Marcia.jpg" alt="Marcia"/>
                            <h2>Marcia</h2>
                        </div>
                            <h5>"Great Athmosphere!"</h5>
                            <p>Little Lemon Café exudes South American charm, crafting a welcoming ambiance. The lively energy complements delightful dishes, ensuring each visit is memorable. Obrigado!</p>
                    </div>
                    <div className="box">
                        <div className="top-box">
                                <img src="./Images/Leo.jpg" alt="Leo"/>
                                <h2>Leo</h2>
                        </div>
                            <h5>"I love the Music!"</h5>
                            <p>Little Lemon Café's lively beats whisk me to South America—a musical journey entwined with delightful flavors. Obrigado for unforgettable experiences!</p>
                    </div>
                    <div className="box">
                        <div className="top-box">
                                <img src="./Images/Carina.jpg" alt="Carina"/>
                                <h2>Carina</h2>
                        </div>
                            <h5>"The Best Açaí ever!"</h5>
                            <p>Little Lemon Café's Açaí: A Brazilian delight with velvety texture, rich flavor, and a refreshing kick—Gold Coast's best Açaí experience! Obrigado, Little Lemon!</p>
                    </div>
                    <div className="box">
                        <div className="top-box">
                                <img src="./Images/Kelly.jpg" alt="Kelly"/>
                                <h2>Kelly</h2>
                        </div>
                            <h5>"Lovely Customer Service!"</h5>
                            <p>Little Lemon Café excels in service, radiating Brazilian warmth through attentive staff and genuine smiles, enhancing the delightful South American culinary experience. Obrigado!</p>
                    </div>
                </div>
            <div></div>
        </div>
    </div>
)

}

export default Main;