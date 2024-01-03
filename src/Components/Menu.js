// eslint-disable-next-line
import style from "./Menu.css";
import React from "react";

function Menu () {
    return (
        <div className="menu">
            <div className="menu-content">
                <h1>Little Lemon Menu <span><img src="https://littlelemon-app.vercel.app/static/media/logo.b8445110e4e49b6b30a0.png" alt="logo" /></span></h1>
                    <ul className="menu-list">
                        <li class="category-bev">Bebidas</li>
                            <ul className="menu-itens"> 
                                <li className="item">Café: <span class="price">$4,00</span></li>
                                <li className="item">Chá: <span class="price">$4,00</span></li>
                                <li className="item">Mate Leão: <span class="price">$6,00</span></li>
                                <li className="item">Fresh Fruit Juices: <span class="price">$8,00</span></li>
                            </ul>

                        <li class="category-app">Entradas</li>
                            <ul className="menu-itens">
                                <li className="item">Pão de Quejo: <span class="price">$8,00</span></li>
                                <li className="item">Pão Com Mortadela: <span class="price">$8,00</span></li>
                                <li className="item">Bolo de Aipim: <span class="price">$10,00</span></li>
                                <li className="item">Bolo de Milho: <span class="price">$10,00</span></li>
                            </ul>

                        <li class="category-lun">Almoço</li>
                            <ul className="menu-itens">
                                <li className="item">Asado: <span class="price">$10.00</span></li>
                                <li className="item">Ceviche: <span class="price">$8.50</span></li>
                                <li className="item">Feijoada: <span class="price">$9.00</span></li>
                                <li className="item">Lomo Saltado: <span class="price">$11.50</span></li>
                            </ul>

                        <li class="category-des">Doces</li>
                            <ul className="menu-itens">
                                <li className="item">Pudim: <span class="price">$5,00</span></li>
                                <li className="item">Alfajores: <span class="price">$4,50</span></li>
                                <li className="item">Churros: <span class="price">$6,00</span></li>
                                <li className="item">Brigadeiro: <span class="price">$3,50</span></li>
                            </ul>
                    </ul>
            </div>
        </div>
    )
}

export default Menu;