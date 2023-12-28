
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Products from "./pages/products/Products.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';
import Checkout from './components/checkout/Checkout';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Catalogue from './pages/catalogue/Catalogue';
import Soon from './pages/soon/Soon';
import Payment from './components/payment/Payment';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      {/* <Route path='/' element={<Soon /> } /> */}
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/products' element={<Products /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/cart' element={<Cart /> } />
        <Route path='/wishlist' element={<Wishlist /> } />
        <Route path='/checkout' element={<Checkout /> } />
        <Route path='/register' element={<Register /> } />
        <Route path='/login' element={<Login /> } />
        <Route path="/catalogue/:subcategory" element={<Catalogue />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
