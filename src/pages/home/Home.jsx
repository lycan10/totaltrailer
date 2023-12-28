import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Qualities from '../../components/qualities/Qualities'
import Cards from '../../constant/cards/Cards'
import Bestseller from '../../components/bestsellers/Bestseller'
import NewArrivals from '../../components/newarrivals/NewArrivals'
import TopDeals from '../../components/topdeals/TopDeals'
import TopCollections from '../../components/topcollections/TopCollections'
import Footer from "../../components/footer/Footer"

import banner2 from "../../assets/banner-23.jpeg"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Qualities />
      <Bestseller />
      <NewArrivals />
      <div className="products-right-banner">
              <img src={banner2} alt="" />
            </div>
      <TopDeals />
      <Footer />
    </div>
  )
}

export default Home