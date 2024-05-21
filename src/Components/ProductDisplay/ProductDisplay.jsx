import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star.png'
import star_dull_icon from '../Assets/star_dull_icon1.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className= 'productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name} </h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(1)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price} </div>
          <div className="productdisplay-right-price-new">${product.new_price} </div>
        </div>
        <div className="productdisplay-right-description">
          aqui una breve descripcion del rpoyducot par que se peuda uitilzair 
          dededffkekjfwkjfwekfjefkwf
        </div>
        <div className="productdisplay-right-size">
          <h1>Selecciona el tamaño</h1>
          <div className="productdisplay-right-sizes">
            <div>10CM</div>
            <div>20CM</div>
            <div>30CM</div>
            <div>40CM</div>
            <div>50CM</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>AÑADIR AL CARRITO</button>
        <p className='productdisplay-right-category'> <span>Categoria : </span>Totora , Individuales </p>
        <p className='productdisplay-right-category'> <span>Tags : </span>Moderno , Resistente </p>

      </div>
    </div>
  )
}

export default ProductDisplay
