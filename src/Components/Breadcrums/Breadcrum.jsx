import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum1.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      PRINCIPAL <img src={arrow_icon} alt="" />  TIENDA <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
