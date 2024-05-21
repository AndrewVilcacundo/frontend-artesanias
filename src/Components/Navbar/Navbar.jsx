import React, { useState } from 'react'
import './Navbar.css'
import Logocafe from '../Assets/Logocafe.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu,setMenu] = useState("tienda");

  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img src={Logocafe} alt="" width={100}/>
          <p>ARTESANIAS JIMENEZ</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("tienda")}}><Link style={{textDecoration: 'none'}} to='/'>Tienda</Link>{menu==="tienda"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("paja_toquilla")}}><Link style={{textDecoration: 'none'}} to='/paja_toquilla'>Paja toquilla</Link>{menu==="Paja toquilla"?<hr/>:<></>}</li>
          {/* <li onClick={()=>{setMenu("maderas")}}>Maderas{menu==="maderas"?<hr/>:<></>}</li> */}
          <li onClick={()=>{setMenu("totora")}}><Link style={{textDecoration: 'none'}} to='/totora'>Totora</Link>{menu==="Totora"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" width={70}/></Link>
          <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}

export default Navbar
