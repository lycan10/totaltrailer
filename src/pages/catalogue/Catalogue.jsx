import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch';

import Table from 'react-bootstrap/Table';
import {RxHamburgerMenu} from "react-icons/rx"
import BestSellerCards from '../../constant/bestSellerCards/BestSellerCards';

import Modal from 'react-bootstrap/Modal';
import {AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import Reviews from '../../components/reviews/Reviews';
import Newsletter from '../../components/newsletter/Newsletter';

import grid from "../../assets/squares-four.svg"
import list from "../../assets/list-bullets.svg"

import "./catalogue.css"
import ListCard from '../../constant/listCard/ListCard';




const Catalogue = () => {

  const { subcategory } = useParams();
  const apiUrl = subcategory
    ? `http://localhost:1337/api/products?populate=*&subCategory=${subcategory}`
    : 'http://localhost:1337/api/products?populate=*';


    const { loading, data, error } = useFetch(apiUrl);
    const [activeModal, setActiveModal] = useState(null);
    const [value, setValue] = useState(1)

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const [selectedOption, setSelectedOption] = useState('Brands'); // Initial selected option
    const [sortedData, setSortedData] = useState([]);

    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const toggleViewMode = () => {
      setViewMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
    };


    const handleMinPriceChange = (e) => {
      setMinPrice(e.target.value);
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(e.target.value);
    };
   

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(apiUrl);
        const newData = await result.json();
        // Handle the fetched data as needed
      };
  
      fetchData();
    }, [subcategory, apiUrl]);
  
    const filteredProducts = subcategory
    ? data.data.filter((product) => product.attributes.subCategory === subcategory)
    : data.data;


    useEffect(() => {
      if (data && data.data) {
        const filteredProducts = subcategory
          ? data.data.filter((product) => product.attributes.subCategory === subcategory)
          : data.data;
        setFilteredData(filteredProducts);
      }
    }, [data, subcategory]);
  

  
    // useEffect(() => {
    //   // Filter data based on selected brands
    //   const filteredByBrand = data.data.filter((product) => selectedBrands.includes(product.attributes.brand));
    //   console.log(data.data)
    //   setFilteredData(filteredByBrand);
    // }, [selectedBrands, data]);


    const handlePriceFilter = () => {
      // Perform filtering based on the selected price range
      const filteredByPrice = filteredProducts.filter((product) => {
        const productPrice = product.attributes.originalPrice;
    
        if (minPrice !== '' || maxPrice !== '') {
          return (
            (!minPrice || productPrice >= parseInt(minPrice)) &&
            (!maxPrice || productPrice <= parseInt(maxPrice))
          );
        }
    
        return true; // If no price range is selected, show all products
      });
    
      setFilteredData(filteredByPrice);
    };
    

 

    if (loading) return <p>Loading....</p>
    if (error) return <p>ERROR....</p>
    
    if (!data || data === null) {
      return <p>No data available.</p>;
    }


  const goodData = data.data;

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
   


    const filteredBrandData = subcategory
      ? goodData.filter(product => product.attributes.subCategory === subcategory)
      : goodData;

const uniqueBrand = [...new Set(filteredBrandData.map(product => product.attributes.brand))];


  return (
    <div>
        <Navbar />
        <div className="products-main-container">
          <div className="products-left">
            <div className="product-left-filter">
                <div className="product-filter-title">
                  <h1>FILTERED PRODUCTS</h1>
                </div>
            </div>
            
            <div className='catalogue-left-categories'>
                <h1>CATEGORY</h1>
                <div  className='catalogue-left-categories-container'>
                    <h1>PRICE</h1>
                    <div className="catalogue-price">
                        <input type="range" name="" id="" placeholder='1'/>
                    </div>
                    <div className="catalogue-price-input">
                      <p>$</p>
                      <input type="number" value={minPrice} onChange={handleMinPriceChange} placeholder="Min Price" />
                      <p> - </p>
                      <p> $ </p>
                      <input type="number" value={maxPrice} onChange={handleMaxPriceChange} placeholder="Max Price" />
                    </div>
                    <div className="catalogue-price-input-submit">
                      <button onClick={handlePriceFilter}>Apply Filter</button>
                    </div>
                </div>
                <div  className='catalogue-left-categories-container'>
                    <h1>MANUFACTURER</h1>

                    <div className="catalogue-manufacturers-input">
                    {uniqueBrand.map((brand, index) => {
                      // Count the occurrences of the brand in the filtered data
                      const brandCount = filteredData.reduce((count, product) => (product.attributes.brand === brand ? count + 1 : count), 0);

                      return (
                        <div key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                          <div className="catalogue-manufacturers-left">
                          
                            <p>{brand}</p>
                          </div>
                          <div className="catalogue-manufacturers-right">
                            <p>({brandCount})</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

            </div>
            <div className="product-left-reviews">
              <Reviews />
              </div>
            <div className="product-left-newsletter">
              <Newsletter />
            </div>
          </div>
          <div className="product-right-container">
            <div className="catalogue-title">
                <h1>{subcategory}</h1>
            </div>
              
                <div className="catalogue-top-filter">
                    <div className="catalogue-top-filter-left">
                        <div className="catalogue-top-filter-options">
                        <div
                         className={`catalogue-top-filter-options-grid ${viewMode === 'grid' ? 'active' : ''}`}
                         onClick={() => setViewMode('grid')}
                        >
                          <img src={grid} alt="" />
                        </div>
                        <div
                          className={`catalogue-top-filter-options-list ${viewMode === 'list' ? 'active' : ''}`}
                          onClick={() => setViewMode('list')}
                        >
                          <img src={list} alt="" />
                        </div>
                          
                        </div>
                        <p>Item 1 - 10 0f 13</p>
                    </div>
                   
            </div>
            <div className={viewMode === 'grid' ? "bestseller-bottom catalogue-grid" : "catalogue-list"}>
      {filteredData.map((product) => (
        <div key={product.id}>
          {viewMode === 'grid' ? (
            <BestSellerCards
              key={product.id}
              img={`http://localhost:1337${product.attributes.img.data.attributes.formats.thumbnail.url}`}
              title={product.attributes.description}
              ratings={product.attributes.rating}
              originalPrice={product.attributes.originalPrice}
              onClick={() => handleShowModal(product.id)}
            />
          ) : (
            <div className="catalogue-list">
            <div> 
              <ListCard 
              key={product.id}
              img={`http://localhost:1337${product.attributes.img.data.attributes.formats.thumbnail.url}`}
              title={product.attributes.description}
              ratings={product.attributes.rating}
              discountedPrice={product.attributes.discountedPrice}
              description={product.attributes.description2}
              />
            </div>
            </div>
          )}
        </div>
      ))}

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
        
        <Footer />
    </div>
  )
}

export default Catalogue