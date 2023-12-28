import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import BestsellerCards from '../../constant/bestSellerCards/BestSellerCards';
import Modal from 'react-bootstrap/Modal';
import {AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import {IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import Table from 'react-bootstrap/Table';


import useFetch from '../../hooks/useFetch';

const NewArrivals = () => {

    const {loading, data, error} = useFetch("http://localhost:1337/api/products?populate=*")

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
      
      if (loading) return <p>Loading....</p>
      if (error) return <p>ERROR....</p>
      
      if (!data || data === null) {
        return <p>No data available.</p>;
      }
      
      
      const goodData = data.data;

      const reversedData = [...goodData].reverse();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        prevArrow: <IoIosArrowBack className='arrow-size' /> ,
        nextArrow: <IoIosArrowForward className='arrow-size'  />
      };

    //   const filteredBestSellerData = goodData.filter((item) => {
    //     if (item.brand.toLowerCase() === selectedCategory.toLowerCase()) {
    //         return true; // Show all items when "ALL" is selected
    //     }
    //     return selectedCategory === "ALL";
    // });



  return ( 
    <div className='bestsellers'>
        <div className="bestseller-container">
            <div className="bestseller-top">
                <h1>NEW ARRIVALS </h1>
                <div className="bestseller-filter-main">
                
                <div className="bestseller-button"></div>
            </div>
            </div>
            <div className="bestseller-bottom">
            <Slider {...settings}>
                        {reversedData.map((item) => {
                            const imageURL = `http://localhost:1337${item.attributes.img.data.attributes.formats.thumbnail.url}`
                            return (
                                <div key={item.id}>
                                    <BestsellerCards
                                        key={item.id}
                                        img={imageURL}
                                        title={item.attributes.description}
                                        ratings={item.attributes.rating}
                                        discountedPrice={item.attributes.originalPrice}
                                        onClick={() => handleShowModal(item.id)}
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
                            <p>${product.attributes.originalPrice}</p>
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
  )
}

export default NewArrivals