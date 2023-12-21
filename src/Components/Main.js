// eslint-disable-next-line
import style from "./Main.css";
import { Link } from 'react-router-dom';
import Modal from "./Modal.js";
import React, { useState } from "react";

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
                        <img className="image-1" src="https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2017/11/cafe-style-smashed-avo-7-3-744x658.jpg" alt="Smashed Avo" />
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
                                    "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2017/11/cafe-style-smashed-avo-7-3-744x658.jpg",
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
                        <img className="image-2" src="https://images.pexels.com/photos/14167805/pexels-photo-14167805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Açaí" />
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
                                    "https://images.pexels.com/photos/14167805/pexels-photo-14167805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                    "Açaí do Rico",
                                    "$14,00",
                                    "Savor the essence of Brazil with a delectable açaí bowl, blending the rich flavors of Brazilian berries, organic almond granola into a vibrant and wholesome culinary delight."
                                )}>
                                Order Now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img className="image-3" src="https://media.gettyimages.com/id/551581599/photo/pingado-brazilian-breakfast.jpg?s=1024x1024&w=gi&k=20&c=THGZxQiZ8-BH8dSj2rDPUbJ3XaD04Ll6M0UyZBY8DJA=" alt="Pingado" />
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
                                    "https://media.gettyimages.com/id/551581599/photo/pingado-brazilian-breakfast.jpg?s=1024x1024&w=gi&k=20&c=THGZxQiZ8-BH8dSj2rDPUbJ3XaD04Ll6M0UyZBY8DJA=",
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
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Marcia"/>
                            <h2>Marcia</h2>
                        </div>
                            <h5>"Great Athmosphere!"</h5>
                            <p>Little Lemon Café exudes South American charm, crafting a welcoming ambiance. The lively energy complements delightful dishes, ensuring each visit is memorable. Obrigado!</p>
                    </div>
                    <div className="box">
                        <div className="top-box">
                                <img src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Leo"/>
                                <h2>Leo</h2>
                        </div>
                            <h5>"I love the Music!"</h5>
                            <p>Little Lemon Café's lively beats whisk me to South America—a musical journey entwined with delightful flavors. Obrigado for unforgettable experiences!</p>
                    </div>
                    <div className="box">
                        <div className="top-box">
                                <img src="https://images.unsplash.com/photo-1561406636-b80293969660?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Carina"/>
                                <h2>Carina</h2>
                        </div>
                            <h5>"The Best Açaí ever!"</h5>
                            <p>Little Lemon Café's Açaí: A Brazilian delight with velvety texture, rich flavor, and a refreshing kick—Gold Coast's best Açaí experience! Obrigado, Little Lemon!</p>
                    </div>
                    <div className="box">
                        <div className="top-box">
                                <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kelly"/>
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