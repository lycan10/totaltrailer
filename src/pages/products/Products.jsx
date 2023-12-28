import React, {useState, useEffect} from 'react'
import "./products.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import banner from "../../assets/contact.jpg"
import Slider from "react-slick";
import {RxHamburgerMenu} from "react-icons/rx"
import BestSellerCards from '../../constant/bestSellerCards/BestSellerCards';
import Cards from '../../constant/cards/Cards';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';


import Modal from 'react-bootstrap/Modal';
import {AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import banner2 from "../../assets/banner-23.jpeg"
import Reviews from '../../components/reviews/Reviews';
import Newsletter from '../../components/newsletter/Newsletter';

import {IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

import useFetch from '../../hooks/useFetch';

const Products = () => {

  const {loading, data, error} = useFetch("http://localhost:1337/api/products?populate=*")
  

  const [activeModal, setActiveModal] = useState(null);
  const [value, setValue] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  if (loading) return <p>Loading....</p>
if (error) return <p>ERROR....</p>

if (!data || data === null) {
  return <p>No data available.</p>;
}


const goodData = data.data;



const uniqueCategories = [...new Set(goodData.map(product => product.attributes.Category))];
const uniqueSubcategories = [];

goodData.forEach(product => {
  const category = product.attributes.Category;
  const subCategory = product.attributes.subCategory;

  if (!uniqueSubcategories[category]) {
    uniqueSubcategories[category] = [...new Set()];
  }

  if (!uniqueSubcategories[category].includes(subCategory)) {
    uniqueSubcategories[category].push(subCategory);
  }
});



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



  const navigateToCatalogue = (subCategory) => {


    // Use the URL of the page you want to navigate to
    const newUrl = `/catalogue/${subCategory}`;
    // Redirect to the new page
    window.location.href = newUrl;
  };




  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack className='arrow-size' /> ,
    nextArrow: <IoIosArrowForward className='arrow-size'  />
  };



  return (
    <div className='products'>
      <Navbar />
      <div className="product-container">
      <div className="contact-header-image">
          <div className="banner-opacity"></div>
          <img src={banner} alt="" />
          <div className="contact-header-text">
          <h1>Products</h1>
        </div>
        </div>
        <div className="products-main-container">
          <div className="products-left">
            <div className="product-left-filter">
                <div className="product-filter-title">
                  <RxHamburgerMenu className='product-filter-title-icon' />
                  <h1>ALL CATEGORIES</h1>
                </div>
            </div>
            
            <div className='product-left-categories'>
              {uniqueCategories.map((category, index) => (
                <div key={index} className='product-left-categories-container'>
                  <Accordion >
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>{category}</Accordion.Header>
                      <Accordion.Body>
                        {uniqueSubcategories[category].map((subcategory, subIndex) => (
                   
                          <div key={subIndex} className='categoryLists'>
                                   <p onClick={() => navigateToCatalogue(subcategory)}>{subcategory}</p>
                          </div>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="product-left-reviews">
              <Reviews />
              </div>
            <div className="product-left-newsletter">
              <Newsletter />
            </div>
          </div>
          <div className="product-right-container">
            <div className="products-right"></div>
            <div className="products-right-offers">
              <div className="products-right-offers1"></div>
              <div className="products-right-offers2">
              <div className="products-right-offers2a"></div>
              <div className="products-right-offers2b"></div>
              </div>
            </div>
            <div className="products-right-bestseller">
            <div className='bestsellers product-width'>
        <div className="bestseller-container">
            <div className="bestseller-top">
                <h1>BEST SELLERS</h1>
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
                <div className="product-button"></div>
            </div>
            </div>
            <div className="bestseller-bottom">
            <Slider {...settings}>
                        {goodData.map((product) => {
                            const imageURL = `http://localhost:1337${product.attributes.img.data.attributes.formats.thumbnail.url}`
                            return (
                                <div key={product.id}>
                                    <BestSellerCards
                                        key={product.id}
                                        discountPercent={product.attributes.discountPrice}
                                        img={imageURL}
                                        title={product.attributes.description}
                                        ratings={product.attributes.rating}
                                        discountedPrice={product.attributes.discountedPrice}
                                        originalPrice={product.attributes.originalPrice}
                                        onClick={() => handleShowModal(product.id)}
                                    />
                                </div>
                            )
                        })}
                    </Slider>
            </div>
        </div>
        {goodData.map((product) => {
            const imageURL = `http://localhost:1337${product.attributes.img.data.attributes.formats.thumbnail.url}`

            return (
        <div key={product.id}>
          <Modal
            key={product.id}
            show={activeModal === product.id}
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
                    <img style={{objectFit:"cover"}} src={imageURL} alt="" />
                </div>
                <div className="modal-content">
                    <h1>{product.attributes.brand}</h1>
                    <div className="modal-content2">
                        <p> ✓ In Stock</p>
                        <p><span>SKU:</span>{product.attributes.sku}</p>
                    </div>
                    <div className="modal-description">
                        <p><span style={{color:"black"}}>Description: </span>{product.attributes.description}</p>
                    </div>
                    <p style={{color:"gold"}}>{product.attributes.rating}</p>
                        <div className="model-data-amount">
                            <p>${product.attributes.discountedPrice} <span>${product.attributes.originalPrice}</span></p>
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

                    <div className="modal-description-details">
                      <div className="modal-description">
                          <p><span style={{color:"black"}}>Country of origin: </span>{product.attributes.origin}</p>
                      </div>
                    </div>

                  
                    <div className="modal-description-table">
                    <Table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>MFG#</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                        {product.attributes.type.details.map((detail, index) => (
                          <tr key={index}>
                            <td> <span className='table-text'>{detail.id}</span></td>
                            <td><span className='table-text'>{detail.MFG}</span></td>
                            <td><span className='table-text'>{detail.description}</span></td>
                          </tr>
                        ))}
                         
                        </tbody>
                      </Table>
                    </div>
                  
                  
                </div>
                </div>
                </Modal.Body>
                </Modal>
                </div>
            )
            })}


    </div>
            </div>
            <div className="products-right-banner">
              <img src={banner2} alt="" />
            </div>
              <div className="products-right-deals">
              <div className='bestsellers product-width'>
    


    </div>
              </div>
          </div>
        
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products