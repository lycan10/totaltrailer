import React,{useState, useEffect, useRef} from 'react'
import logo from "../../assets/2.png"
import logo2 from "../../assets/1.jpg"
import "./navbar.css"
import {AiOutlineHeart} from "react-icons/ai"
import {FiShoppingBag} from "react-icons/fi"
import {FiUser} from "react-icons/fi"
import {PiClipboardText} from "react-icons/pi"
import phone from "../../assets/phone-call.png"
import { bestSellerData, cartData } from '../../constant/data/data'
import {BsTrash} from "react-icons/bs"
import {RxHamburgerMenu} from "react-icons/rx"
import { userData } from "../../pages/helpers";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  const [value, setValue] = useState(1)
  const [isCartOpen, setCartOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  const cartDropdownRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
//   const isLoggedIn = false; // Replace with your actual logic for checking if the user is logged in
  
//   const userData = useFetch(url).data;
// const user = userData && userData.length > 0 ? userData[0] : null;

// const username = user ? user.username : '';
// const firstName = user ? user.firstName : '';

const { username } = userData();

  const openCart = () => {
    setCartOpen(true);
    // Add a class to the body element
    document.body.classList.add('body-scroll-lock');
  };

  const closeCart = () => {
    setCartOpen(false);
    // Remove the class from the body element
    document.body.classList.remove('body-scroll-lock');
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setDropDown(false);
        document.body.classList.remove('body-scroll-lock');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartDropdownRef]);



    const navigateToHome = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/';
        
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          // Navigate to the new page
          window.location.href = newUrl;
        }
      };
      const navigateToAbout = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/about';
        
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          // Navigate to the new page
          window.location.href = newUrl;
        }
      };
      const navigateToProduct = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/products';
        
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          // Navigate to the new page
          window.location.href = newUrl;
        }
      };

      const navigateToContact = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/contact';
        
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          // Navigate to the new page
          window.location.href = newUrl;
        }
      };

      const navigateToCheckout = () => {
        // Redirect to the checkout page
        window.location.href = '/checkout';
      };

      const navigateToCart = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/cart';
        
        if (username) {
          // If the user is logged in, navigate to the wishlist page
          if (window.location.pathname === newUrl) {
            // If the user is already on the target page, perform a full page reload
            window.location.reload();
          } else {
            // Navigate to the new page
            window.location.href = newUrl;
          }
        } else {
          // If the user is not logged in, show the modal
          setShowModal1(true);
        }
      };
      const closeModal1 = () => {
        setShowModal1(false);
      };

      const navigateToWishlist = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/wishlist';
    
        if (username) {
          // If the user is logged in, navigate to the wishlist page
          if (window.location.pathname === newUrl) {
            // If the user is already on the target page, perform a full page reload
            window.location.reload();
          } else {
            // Navigate to the new page
            window.location.href = newUrl;
          }
        } else {
          // If the user is not logged in, show the modal
          setShowModal(true);
        }
      };
    
      const closeModal = () => {
        setShowModal(false);
      };


      const navigateToRegister = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/register';
        
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          // Navigate to the new page
          window.location.href = newUrl;
        }
      };

      const navigateToLogin = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/login';
        
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          // Navigate to the new page
          window.location.href = newUrl;
        }
      };

      const handleIncrease = () =>{
        setValue(value + 1)
    }
    const handleDecrease = () => {
        if (value > 1) {
          setValue(value - 1);
        } else {
          setValue(1);
        }
      }
     
      const handleChange = (e) =>{
        setValue(e.target.value)
      }

      const handleSubmit = () => {

      }


      const handleLogout = () => {
          localStorage.setItem("user", "");
          const newUrl = '/Login';
        
          if (window.location.pathname === newUrl) {
            // If the user is already on the target page, perform a full page reload
            window.location.reload();
          } else {
            // Navigate to the new page
            window.location.href = newUrl;
          };
        };
      
      
      

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="navbar-top-welcome">
            <p>Welcome to #TotalPeaceofMind! <span>Email: totaltrailerparts.com</span></p>
          </div>
          {username ? (
        <div className="navbar-top-login-container">
          <div className="navbar-login" >
            <FiUser className="navbar-icons" />
            <p>Hi {username}</p>
          </div>
          <div className="navbar-login" onClick={handleLogout}>
            <PiClipboardText className="navbar-icons" />
            <p>Logout</p>
          </div>
        </div>
      ) : (
        <div className="navbar-top-login-container">
          <div className="navbar-login" onClick={navigateToLogin}>
            <FiUser className="navbar-icons" />
            <p>Login</p>
          </div>
          <div className="navbar-login" onClick={navigateToRegister}>
            <PiClipboardText className="navbar-icons" />
            <p>Register</p>
          </div>
        </div>
      )}
        </div>
        <div className="navbar-middle">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-middle-content">
            <div className="navbar-middle-tel">
              <div className="navbar-middle-tel-img">
                <img src={phone} alt="" />
              </div>
              <div className="navbar-tel-number">
                <h1>CALL US NOW</h1>
                <p>(+1) 268 268 668</p>
              </div>
            </div>
            <div className="navbar-middle-cart" onMouseEnter={openCart} onMouseLeave={closeCart}>
                <div className="navbar-middle-icon">
                  <FiShoppingBag className='icon' />
                </div>
            <div className="navbar-tel-number">
                <h1>SHOPPING CART</h1>
                <div className="navbar-item-number">
                  <p>{cartData.length} items</p>
                  <p style={{margin:" 0 5px"}}>-</p>
                  <p> 
                    ${((cartData[0]?.discountedPrice?.slice(1) || 0) * cartData.length).toFixed(2)}
                    </p>
                    <Modal show={showModal1} onHide={closeModal1}>
                      <Modal.Header closeButton>
                        <Modal.Title>Please Login</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>You need to log in to access the wishlist.</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal1}>
                          Close
                        </Button>
                        {/* Add a login button or link to your login page */}
                        <Button variant="primary" onClick={navigateToCart}>
                          Login
                        </Button>
                      </Modal.Footer>
                    </Modal>
                </div>
                <p></p>
              </div>
              {
                cartData.length === 0 ? (
                  <div className="shopping-cart-dropdown">
                  <h1>You have no item in your shopping cart. </h1>
                </div>
                ) : (
              <div className="shopping-cart-dropdown-cart" > 
                <div className="shopping-cart-dropdown-cart-top"> 
                  <div className="shopping-cart-dropdown-cart-quantity">
                    <p> <span style={{color:'black', fontWeight:'600'}}>{cartData.length}</span> Items in Cart</p>
                    <div className="shopping-cart-dropdown-cart-amount">
                    <p>Cart Subtotal: </p>
                    <h2> ${((cartData[0]?.discountedPrice?.slice(1) || 0) * cartData.length).toFixed(2)}</h2>

                    </div>
                  </div>
                  <div className="shopping-cart-dropdown-cart-button" onClick={navigateToCheckout}>
                    <p>PROCEED TO CHECKOUT</p>
                  </div>
                </div>
                <div className="shopping-cart-dropdown-cart-middle">
                  <div className="scroll-container-content">
                    {
                      cartData.map((item)=>{
                        return(
                          <div className="shopping-cart-dropdown-cart-content">
                            <div className="shopping-cart-dropdown-cart-content-image">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="shopping-cart-dropdown-cart-content-details">
                              <p>{item.title}</p>
                              <h2>{item.discountedPrice}</h2>
                              <div className="shopping-cart-dropdown-cart-content-footer">
                              <div className="shopping-cart-dropdown-cart-content-qty">
                                  <p>QTY</p>
                                  <div className="cart-counter1">
                                  <input type="text" value={value.toString()} onChange={handleChange} />
                                  </div>
                              </div>
                                <div className="shopping-cart-dropdown-cart-content-icons">
                                  <BsTrash />
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="shopping-cart-dropdown-cart-bottom">
                <div className="shopping-cart-dropdown-cart-bottom-button" onClick={navigateToCart}>
                    <p>VIEW AND EDIT CART</p>
                  </div>
                </div>
              </div>
                )
              }
             
              
            </div>
          </div>
        </div>
        <div className="navbar-bottom">
            <div className="navbar-links">
                <ul>
                <li>
                    <span onClick={navigateToHome}>HOME</span>
                    </li>
                    <li>
                        <span onClick={navigateToAbout}>ABOUT</span>
                    </li>
                    <li>
                        <span onClick={navigateToProduct}>PRODUCTS</span>
                    </li>
                    <li>
                        <span onClick={navigateToContact}>CONTACT</span>
                    </li>
                   
                </ul>
            </div>
            <div className="navbar-cta" onClick={navigateToWishlist}>
              <h1>WISHLIST: </h1>
                <AiOutlineHeart className='icon2' />
            </div>
            <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to log in to access the wishlist.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          {/* Add a login button or link to your login page */}
          <Button variant="primary" onClick={navigateToLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>
        <div className="navbar-mini">
          <div className="navbar-mini-container">
            <div className="navbar-mini-hamburger">
              <RxHamburgerMenu />
            </div>
            <div className="navbar-mini-image"> 
              <img src={logo} alt="" />
            </div>
            <div className="navbar-mini-shopping-cart">
              <FiShoppingBag onClick={toggleDropDown} />
              { dropDown &&
                
                cartData.length === 0 ? (
                  <div className="shopping-cart-dropdown" style={{ display: dropDown ? 'flex' : 'none' }} ref={cartDropdownRef}>
                  <h1>You have no item in your shopping cart. </h1>
                </div>
                ) : 
                (
              <div className="shopping-cart-dropdown-cart" style={{ display: dropDown ? 'flex' : 'none' }} ref={cartDropdownRef}>
                <div className="shopping-cart-dropdown-cart-top">
                  <div className="shopping-cart-dropdown-cart-quantity">
                    <p> <span style={{color:'black', fontWeight:'600'}}>{cartData.length}</span> Items in Cart</p>
                    <div className="shopping-cart-dropdown-cart-amount">
                    <p>Cart Subtotal: </p>
                    <h2> ${((cartData[0]?.discountedPrice?.slice(1) || 0) * cartData.length).toFixed(2)}</h2>

                    </div>
                  </div>
                  <div className="shopping-cart-dropdown-cart-button" onClick={navigateToCheckout}>
                    <p>PROCEED TO CHECKOUT</p>
                  </div>
                </div>
                <div className="shopping-cart-dropdown-cart-middle">
                  <div className="scroll-container-content">
                    {
                      cartData.map((item)=>{
                        return(
                          <div className="shopping-cart-dropdown-cart-content">
                            <div className="shopping-cart-dropdown-cart-content-image">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="shopping-cart-dropdown-cart-content-details">
                              <p>{item.title}</p>
                              <h2>{item.discountedPrice}</h2>
                              <div className="shopping-cart-dropdown-cart-content-footer">
                              <div className="shopping-cart-dropdown-cart-content-qty">
                                  <p>QTY</p>
                                  <div className="cart-counter1">
                                  <input type="text" value={value.toString()} onChange={handleChange} />
                                  </div>
                              </div>
                                <div className="shopping-cart-dropdown-cart-content-icons">
                                  <BsTrash />
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="shopping-cart-dropdown-cart-bottom">
                <div className="shopping-cart-dropdown-cart-bottom-button" onClick={navigateToCart}>
                    <p>VIEW AND EDIT CART</p>
                  </div>
                </div>
              </div>
                )
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar