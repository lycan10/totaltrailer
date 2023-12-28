import React,{useState} from 'react'

import "./payment.css"
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { cartData } from '../../constant/data/data';

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import gear from "../../assets/gear-fill.svg"

const Payment = () => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [toggle, setToggle] = useState(false)
    const [quantity, setQuantity] = useState(cartData.map(() => 1));

    const handleCountryChange = (value) => {
        setCountry(value);
    };
    
    const handleRegionChange = (value) => {
        setRegion(value);
    };

    const handleToggle = ()=>{
        setToggle(!toggle)
    }

    const subTotal = (itemIndex) => {
        const item = cartData[itemIndex];
        return (parseFloat(item.discountedPrice.slice(1)) * quantity[itemIndex]).toFixed(2);
      };
    
      const cartSubTotal = () => {
        return cartData.reduce((total, item, index) => total + parseFloat(subTotal(index)), 0).toFixed(2);
      };
    
      const shipping = 15.0;
    
      const cartTotal = () => {
        return (parseFloat(cartSubTotal()) + shipping).toFixed(2);
      };

      const navigateToCheckout = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/checkout';
        
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          // Navigate to the new page
          window.location.href = newUrl;
        }
      };
  return (
    <div className='checkout'>
        <Navbar />
        <div className="checkout-container">
        <div className="checkout-title">
            <h1>CHECKOUT</h1>
        </div>
        <div className="checkout-main-container">
        <div className="checkout-left">
            <div className="checkout-shipping-address">
                <div className="checkout-shipping-address-title">
                    <h1>PAYMENT METHOD</h1>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>Email Address</label>
                    <input type='email'/>
                </div>
            </div>
           <div className="checkout-shipping-address-details-button">
                <h1>Next</h1>
           </div>
        </div>
        <div className="checkout-right check">
            <div className="cart-full-right-title">
                <h1>ORDER SUMMARY</h1>
            </div>
            <div className="cart-full-right-detail">
                    
            <div className="cart-full-right-detail-container-top">
                                
                                <div className="cart-full-subtotal">
                                  <p>Subtotal</p>
                                  <p>${cartSubTotal()}</p>
                                </div>
                                <div className="cart-full-subtotal cart-order">
                                  <p>Shipping (Flat Rate - Fixed)</p>
                                  <p>${shipping}</p>
                                </div>
                                <div className="cart-full-total">
                                  <p>Order Total</p>
                                  <p style={{ fontWeight: '700' }}>${cartTotal()}</p>
                                </div>
                              
                              </div>
                <div className="cart-full-right-detail-header" onClick={handleToggle}>
                    <p> <span>{cartData.length}</span> Items in Cart</p>
                    {toggle? <RiArrowUpSLine className='cart-right-icon' /> : <RiArrowDownSLine className='cart-right-icon' />}
                   
                </div>
                {toggle && (
                                <div className= "cart-full-right-detail-container">

                                    {cartData.map((item) => (
                                        <div key={item.id} className="cart-full-right-detail-container-im">
                                            <div className="cart-full-right-detail-container-imago">
                                            <div className="cart-full-right-detail-content-image">
                                                <img src={item.img} alt="pic" />
                                            </div>
                                            <div className="cart-full-right-detail-content-title">
                                                <p style={{ fontWeight: "600" }}>{item.title}</p>
                                                <p>QTY: 1</p>
                                            </div>
                                            </div>
                                            <div className="cart-full-right-detail-content-funds">
                                                <p>{item.discountedPrice}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                )} 
               
            </div>

            <div className="payment-shipping-address">
            <div className="payment-shipping-address-title">
                <h1>SHIP TO:</h1>
                <div className="payment-shipping-address-setting" onClick={navigateToCheckout}>
                    <img src={gear} alt="" />
                </div>
            </div>
            <div className="payment-shipping-address-contact">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            </div>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Payment