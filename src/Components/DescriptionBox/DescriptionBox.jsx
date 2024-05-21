import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (1)</div>
      </div>
      <div className="descriptionbox-description">
        <p>	Esta es la breve descripcion de todo lo que puiede ser el NuevosProductos</p>
        <p>
            Ecommerce donde se puede mostrar los siguientes productos de artesanias como totora o paja toquilla.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
