import React from 'react'
import './Nuevosproductos.css'
import Item from '../Item/Item'
import data_product1 from '../Assets/nuevosproductos'

const Nuevosproductos = () => {
  return (
    <div className='new-collections'>
      <h1>Nuevos productos</h1>
      <hr />
      <div className="collections">
        {data_product1.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Nuevosproductos
