import React from 'react'
import './Hero.css'
import manoemoji1 from '../Assets/manoemoji1.png'
import arrow_icon2 from '../Assets/arrow_icon2.png'
import artesanias_local from '../Assets/artesanias_local.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
      <h2>Artesanias Jimenez</h2>
        <div>
            <div className="hero-hand-icon">
                <p>BIENVENIDO</p>
                <img src={manoemoji1} alt="" />
            </div>
              <p>Variedad</p>
              <p>en artesanias</p>
              <h2>Productos hechos a mano en Fibras Naturales</h2>
        </div>
        <div className="hero-latest-btn">
            <div>A continuación</div>
          <img src={arrow_icon2} alt="" />
      </div>
      </div>
      <div className="hero-right">
        <img src={artesanias_local} alt="" />

      </div>
    </div>
  )
}

export default Hero
