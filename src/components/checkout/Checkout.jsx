import React,{useState} from 'react'
import "./checkout.css"
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { cartData } from '../../constant/data/data';

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"


const Checkout = () => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [toggle, setToggle] = useState(false)

    const handleCountryChange = (value) => {
        setCountry(value);
    };
    
    const handleRegionChange = (value) => {
        setRegion(value);
    };

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    const navigateToPayment = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/payment';
        
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
            <button>Login</button>
        </div>
        <div className="checkout-main-container">
        <div className="checkout-left">
            <div className="checkout-shipping-address">
                <div className="checkout-shipping-address-title">
                    <h1>SHIPPING ADDRESS</h1>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>Email Address</label>
                    <input type='email'/>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>First Name</label>
                    <input type='text'/>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>Last Name</label>
                    <input type='text'/>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>Phone Number</label>
                    <input type='text'/>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>Company</label>
                    <input type='text'/>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>Street Address</label>
                    <input type='text'/>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>Country</label>
                    <div className="checkout-shipping-input">
                        <CountryDropdown
                        className="checkout-shipping-input-dropdown"
                            value={country}
                            onChange={handleCountryChange}
                        />
                    </div>
                   
                   
                </div>
                <div className="checkout-shipping-address-details">
                    <label>State/Province</label>
                    <div className="checkout-shipping-input">
                        <RegionDropdown
                        className="checkout-shipping-input-dropdown"
                            country={country}
                            value={region}
                            onChange={handleRegionChange}
                        />
                    </div>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>City</label>
                    <input type='text'/>
                </div>
                <div className="checkout-shipping-address-details">
                    <label>Zip/Postal Code</label>
                    <input type='text'/>
                </div>
            </div>
           <div className="checkout-shipping-address-details-button" onClick={navigateToPayment}> 
                <h1>Next</h1>
           </div>
        </div>
        <div className="checkout-right">
            <div className="cart-full-right-title">
                <h1>ORDER SUMMARY</h1>
            </div>
            <div className="cart-full-right-detail">
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
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout