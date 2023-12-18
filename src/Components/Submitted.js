
import React from 'react'
import { Link } from "react-router-dom"

const Submitted = ({ isOpen, setOpenSubmitted }) => {

        return isOpen ? (
                <div className='backgdrop'>
                    <div className='submitted'>
                        <div className='submitted-header'>
                            <h3>Order Submitted</h3>
                            <span>
                                <button><img src="./Images/icons8-close-50.png" alt="icone"/>
                                <Link
                                    className="close-button"
                                    type="button"
                                    to="/"
                                    onClick={() => setOpenSubmitted(false)}
                                    >
                                </Link></button></span>
                        </div>
                        <div className='submitted-body'>
                            <div className='submitted-image'>
                                {/*<img src='./Images/logo.nav.png' alt='Little Lemon Logo'/>*/}
                            </div>
                                <div className='submitted-content'>
                                    <div>Checkbox</div>
                                    <h4>Your order has been submitted successfully</h4>
                                    <h2>Little Lemon Café thanks for your order!</h2>
                                </div>
                        </div>
                        <div className='submitted-footer'>
                        <Link
                            className="close-button"
                            type="button"
                            to="/"
                            onClick={() => setOpenSubmitted(false)}
                            >
                            Close
                        </Link>
                        </div>
                    </div>
                </div>
        ) : null;
}

export default Submitted