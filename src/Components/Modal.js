import React from 'react'
import { useState } from 'react';
import Submitted from './Submitted';

import style from './Modal.css'

const Modal = ({isOpen, setOpenModal, modalContent }) => {

    const [openSubmitted, setOpenSubmitted] = useState(false);

    const [quantity, setQuatity] = useState(0);

    const handleIncrement = () => {
    setQuatity(prevNumber => prevNumber + 1);
   }

    const handleDecrement = () => {
    setQuatity(prevNumber => (prevNumber > 0 ? prevNumber - 1 : 0));
   }

    const {image, item, price, description} = modalContent;


        return isOpen ? (
            <div className='background'>
                <div className='modal'>
                    <div className='modal-header'>
                        <h3>Order Confirmation</h3>
                        <span><button onClick={() => setOpenModal(!isOpen)}><img src="./Images/icons8-close-50.png"/></button></span>
                    </div>
                    <div className='modal-body'>
                        <div className='modal-image'>
                            <img src={image} alt={item}/>
                        </div>
                            <div className='modal-content'>
                                <h2>{item}</h2>
                                <p>{description}</p>
                                <h3>{price}</h3>
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
                                setOpenModal(false) //Close the Modal
                                setOpenSubmitted(true) //Open Submitted component
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