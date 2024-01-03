import React from 'react'
import { useState } from 'react';
import Submitted from './Submitted';
// eslint-disable-next-line
import style from './Modal.css';

const Modal = ({isOpen, setOpenModal, modalContent }) => {

    const [openSubmitted, setOpenSubmitted] = useState(false);

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
    setQuantity(prevNumber => prevNumber + 1);
   } 

    const handleDecrement = () => {
    setQuantity(prevNumber => (prevNumber > 0 ? prevNumber - 1 : 0));
   }

    const {image, item, price, description} = modalContent;

    const priceNumber = parseFloat(price.replace(/[^\d.]/g, '')) ;

    const totalPrice = () => {
        return quantity > 0 ? quantity * priceNumber : 0;
    }

    const resetPrice = () => {
        setQuantity(0)
    }

    const formattedTotalPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(totalPrice() / 100);


        return isOpen ? (
            <div className='background'>
                <div className='modal'>
                    <div className='modal-header'>
                        <h3>Order Confirmation</h3>
                        <span><button onClick={() => setOpenModal(!isOpen)}><img src="./Images/icons8-close-50.png" alt="icone"/></button></span>
                    </div>
                    <div className='modal-body'>
                        <div className='modal-image'>
                            <img src={image} alt={item}/>
                        </div>
                            <div className='modal-content'>
                                <h2>{item}</h2>
                                <p>{description}</p>
                                <h3>{price}</h3>
                                <h3>{formattedTotalPrice}</h3>
                            </div>
                    </div>
                    <div className='modal-footer'>
                        <div className='add-button'>
                            <button className='add-button-btn' onClick={handleDecrement}>-</button>
                            <span className='quantity'>{quantity}</span>
                            <button className='add-button-btn' onClick={handleIncrement}>+</button>
                        </div>

                        <button
                            className="confirm-button"
                            onClick={() => {
                                alert("Order Confirmed and Submitted.Thank you for choose Little Lemon Café! ")
                                setOpenModal(false) //Close the Modal
                                setOpenSubmitted(true) //Open Submitted component
                                resetPrice()
                                console.log("Clicked")
                            }}
                            type="button">
                            Confirm
                        </button>
                    </div>
                </div>
                <Submitted
                    isOpen={openSubmitted}
                    setOpenSubmitted={setOpenSubmitted}
                >
                </Submitted>
            </div>

        ) : null;
    }

export default Modal;