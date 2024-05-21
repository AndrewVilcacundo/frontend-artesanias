import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import carroequis from '../Assets/carroequis.png'

const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Productos</p>
        <p>Titulos</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
            {
                return  <div>
                            <div className="cartitems-format">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name} </p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]} </button>
                                <p>{e.new_price*cartItems[e.id]} </p>
                                <img src={carroequis} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
      })}
    </div>
  )
}

export default CartItems


   