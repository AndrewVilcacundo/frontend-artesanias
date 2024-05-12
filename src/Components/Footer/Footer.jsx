import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Logocafe.png'
import instagram_icon from '../Assets/instagram_iconn1.png'
import whatsapp_icon from '../Assets/whatsapp_iconn1.png'
import facebook_icon from '../Assets/facebookk_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Artesanias Jimenez</p>
      </div>
      <ul className="footer-links">
        <li>Productos</li>
        <li>Acerca</li>
        <li>Contacto</li>
        <li>Ubicación</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container1">
            <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icons-container2">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
