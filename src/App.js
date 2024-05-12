import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import paja_toquilla from './Components/Assets/banner_paja.png'
import totora from './Components/Assets/totora_paja.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/paja_toquilla' element={<ShopCategory category ="paja_toquilla"/>}/>
        <Route path='/maderas' element={<ShopCategory category="maderas" />}/>
        <Route path='/totora' element={<ShopCategory category= "totora"/>}/>
        <Route path="product" element ={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
