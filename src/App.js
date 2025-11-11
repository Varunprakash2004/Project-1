import Navbar from './components/Navbar';
import AboutUs from './Pages/AboutUs';
import react from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/Footer';
import ContactUs from './Pages/ContactUs';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import { CartProvider } from './Context/CartContext';
import ProductDetail from './Pages/ProductDetail';


function App() {
  return (
    <BrowserRouter>
     <CartProvider>
   
 
    <Navbar/>
    <div className='container-fluid p-0' style={{minHeight:"100vh"}}>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutUs/>}/>
      <Route path='/product' element={<Product/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
     <Route path='/cart' element={<Cart/>}/> 
     <Route path='/product/:id' element={<ProductDetail/>}/>  

    </Routes>
    </div>
    <Footer/>
     </CartProvider>
    </BrowserRouter>
  );
}

export default App;
