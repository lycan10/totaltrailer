import React, {useState, useEffect} from 'react'
import "./topdeals.css"
import Slider from "react-slick";
import Cards from '../../constant/cards/Cards';
import { topDealsData } from '../../constant/data/data';
import Modal from 'react-bootstrap/Modal';
import {AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai"
import {IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
const TopDeals = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [value, setValue] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setSlidesToShow(4); // Large screen
        } else if (window.innerWidth >= 768) {
          setSlidesToShow(3); // Medium screen
        } else {
          setSlidesToShow(2); // Small screen
        }
      };
  
      // Initial setup
      handleResize();
  
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleClose = () => {
        setActiveModal(null);
    };

    const handleShowModal = (modalId) => {
        setActiveModal(modalId);
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        prevArrow: <IoIosArrowBack className='arrow-size' /> ,
        nextArrow: <IoIosArrowForward className='arrow-size'  />
      };

      const filteredTopDealsData = topDealsData.filter((item) => {
        if (item.title.toLowerCase() === selectedCategory.toLowerCase()) {
            return true; // Show all items when "ALL" is selected
        }
        return selectedCategory === "ALL";
    });

  return ( 
    <div className='bestsellers'>
        <div className="bestseller-container">
            <div className="bestseller-top">
                <h1>TOP DEALS</h1>
                <div className="bestseller-filter-main">
                <div className="bestseller-filters-container">
                    <p
                        onClick={() => setSelectedCategory("ALL")}
                        className={selectedCategory === "ALL" ? "active-category" : ""}
                    >
                        ALL
                    </p>
                    <p
                        onClick={() => setSelectedCategory("Trailer Hitch")}
                        className={selectedCategory === "Trailer Hitch" ? "active-category" : ""}
                    >
                        TRAILER HITCH
                    </p>
                    <p
                        onClick={() => setSelectedCategory("Bike Rack")}
                        className={selectedCategory === "Bike Rack" ? "active-category" : ""}
                    >
                        BICYCLE RACK
                    </p>
                </div>
                <div className="bestseller-button"></div>
            </div>
            </div>
            <div className="bestseller-bottom">
            <Slider {...settings}>
                        {filteredTopDealsData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <Cards
                                        key={item.id}
                                        discountPercent={item.discountPercent}
                                        img={item.img}
                                        title={item.title}
                                        ratings={item.rating}
                                        discountedPrice={item.discountedPrice}
                                        originalPrice={item.originalPrice}
                                        onClick={() => handleShowModal(item.id)}
                                    />
                                </div>
                            )
                        })}
                    </Slider>
            </div>
        </div>
        {filteredTopDealsData.map((item) => (
        <Modal
            key={item.id}
            show={activeModal === item.id}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            
            </Modal.Header>
            <Modal.Body>
                <div className="modal-container">
            <div className='modal-img'>
                <div className="modal-wishlist">
                <AiOutlineHeart /> 
                </div>
                <img src={item.img} alt="" />
            </div>
            <div className="modal-content">
                <h1>{item.title}</h1>
                <div className="modal-content2">
                    <p> ✓ In Stock</p>
                    <p><span>SKU:</span> Mk-98455</p>
                </div>
                <p style={{color:"gold"}}>{item.rating}</p>
                    <div className="model-data-amount">
                        <p> {item.discountedPrice} <span>{item.originalPrice}</span></p>
                        </div>
                <div className="modal-cart-container">
                    <p>QTY</p>
                    <div className="cart-counter">
                    <input type="text" value={value.toString()} onChange={handleChange} />
                        <div className="cart-adjuster">
                            <p onClick={handleIncrease}>+</p>
                            <p onClick={handleDecrease}>-</p>
                        </div>
                    </div>
                    
                    <div className="modal-cart" onClick={handleSubmit}>
                            <AiOutlineShoppingCart className='model-symbol' />
                            <p>ADD TO CART</p>
                        </div>
                </div>
                <div className="modal-description">
                    <p>The perfect recipe for a family game night! Appeals to a wide range of people. Created By National Parks. Parents who had traveled to every single National Park worked together with their board game designer son and created a game to inspire others and help families share their love of the National Parks.</p>
                </div>
            </div>
            </div>
            </Modal.Body>
            </Modal>
))}


    </div>
  )
}

export default TopDeals